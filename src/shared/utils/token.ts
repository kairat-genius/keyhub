import Cookies from "js-cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN, ACCESS_EXPIRES_MINUTES, REFRESH_EXPIRES_MINUTES } from "@/shared/settings";

interface Tokens {
    access?: string;
    refresh?: string;
}

/**
 * Сохраняет токены в куках
 */
export function setTokens({ access, refresh }: Tokens) {
    if (access) {
        Cookies.set(ACCESS_TOKEN, access, {
            path: '/',
            expires: ACCESS_EXPIRES_MINUTES / (60 * 24),
            secure: true,
            sameSite: 'Strict',
        });
    }

    if (refresh) {
        Cookies.set(REFRESH_TOKEN, refresh, {
            path: '/',
            expires: REFRESH_EXPIRES_MINUTES / (60 * 24),
            secure: true,
            sameSite: 'Strict',
        });
    }
}

/**
 * Удаляет токены из куков
 */
export function removeTokens() {
    Cookies.remove(ACCESS_TOKEN, { path: '/' });
    Cookies.remove(REFRESH_TOKEN, { path: '/' });
}

/**
 * Получает токены из куков
 */
export function getAccessToken(): string | null {
    return Cookies.get(ACCESS_TOKEN) || null;
}

export function getRefreshToken(): string | null {
    return Cookies.get(REFRESH_TOKEN) || null;
}
