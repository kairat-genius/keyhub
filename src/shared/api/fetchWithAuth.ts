import { getAccessToken, getRefreshToken } from "@/shared/utils/token";
import { postTokenRefresh } from "@/shared/api/user/postTokenRefresh";

type FetchOptions = RequestInit & {
  retry?: boolean; // позволять повторять запрос после 401
  requireAuth?: boolean; // требует ли запрос авторизации
};

// Кэшируем токен для гостей, чтобы не запрашивать повторно
let cachedAccessTokenForGuest: string | null | undefined = undefined;

/**
 * fetchWithAuth - обертка вокруг fetch, которая:
 * 1. Добавляет JWT токен в заголовки если требуется авторизация
 * 2. Попытка автоматического обновления токена при 401
 * 3. Может работать в режиме "гость" без requireAuth
 */
export async function fetchWithAuth(
  input: RequestInfo,
  options: FetchOptions = {},
): Promise<Response> {
  const { requireAuth = true, retry = true, ...fetchOptions } = options;
  let accessToken: string | null = null;

  // Вспомогательная функция для добавления заголовка Authorization
  const addAuthHeader = (token?: string) => {
    const headers = new Headers(fetchOptions.headers || {});
    if (token) headers.set("Authorization", `JWT ${token}`);
    return headers;
  };

  // Вспомогательная функция для выполнения fetch с токеном
  const doFetch = async (token?: string) =>
    fetch(input, {
      ...fetchOptions,
      headers: addAuthHeader(token),
    });

  // --- Авторизованный режим ---
  if (requireAuth) {
    accessToken = getAccessToken(); // получаем текущий токен

    // Если токена нет, пробуем обновить через refreshToken
    if (!accessToken) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        // TODO: заглушка, пока нет реальной функции обновления
        accessToken = await postTokenRefresh(); // здесь пока вернет null или новый токен
      }
    }

    // Если токен так и не получили — возвращаем 401
    if (!accessToken) {
      return new Response(null, { status: 401 });
    }

    let res = await doFetch(accessToken);

    // Если запрос с токеном вернул 401, пробуем обновить токен и повторить
    if (res.status === 401 && retry) {
      accessToken = await postTokenRefresh();
      if (!accessToken) return res; // если обновление не удалось, возвращаем исходный 401

      res = await doFetch(accessToken);
    }

    return res;
  }

  // --- Режим "гость" (requireAuth: false) ---
  if (!cachedAccessTokenForGuest) {
    cachedAccessTokenForGuest = getAccessToken();

    if (!cachedAccessTokenForGuest) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        // TODO: заглушка обновления токена для гостя
        cachedAccessTokenForGuest = await postTokenRefresh();
      }
    }
  }

  // Выполняем запрос с гостевым токеном или без токена
  let res = await doFetch(cachedAccessTokenForGuest || undefined);
  // Если 401, пробуем повторить без токена
  if (res.status === 401 && cachedAccessTokenForGuest) {
    res = await doFetch(undefined);
  }

  return res;
}
