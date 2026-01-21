import { USER_TOKEN_REFRESH } from "@/shared/api/endpoints";
import { getRefreshToken, setTokens, removeTokens } from "@/shared/utils/token";

/**
 * Обновляет access токен через refresh токен.
 * Возвращает новый access токен или null, если не удалось.
 */
export async function postTokenRefresh(): Promise<string | null> {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    removeTokens();
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  const res = await fetch(USER_TOKEN_REFRESH, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if (!res.ok) {
    removeTokens();

    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  const { access } = await res.json();

  if (access) {
    setTokens({ access });
    return access;
  }

  return null;
}
