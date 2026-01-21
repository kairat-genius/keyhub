import type { CatalogListType } from "./type";
import { fetchWithAuth } from "@/shared/api/fetchWithAuth";

// заглушка при ошибке
export const EMPTY_KEYS_LIST: CatalogListType = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export async function getKeysList(): Promise<CatalogListType> {
  try {
    const res = await fetchWithAuth("sss", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      requireAuth: false,
    });

    if (!res.ok) {
      return EMPTY_KEYS_LIST;
    }

    return await res.json();
  } catch {
    return EMPTY_KEYS_LIST;
  }
}
