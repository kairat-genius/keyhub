export const PUBLIC_API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost";
export const DOCKER_API_BASE_URL =
  import.meta.env.VITE_INTERNAL_DOCKER_API_URL || "http://backend:8000";

export const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN || "access";
export const REFRESH_TOKEN = import.meta.env.VITE_REFRESH_TOKEN || "refresh";

export const ACCESS_EXPIRES_MINUTES = Number(
  import.meta.env.VITE_ACCESS_EXPIRES_MINUTES ?? 60,
);
export const REFRESH_EXPIRES_MINUTES = Number(
  import.meta.env.VITE_REFRESH_EXPIRES_MINUTES ?? 60 * 24 * 7,
);
