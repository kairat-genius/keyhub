import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

export function useFiltersNuqs() {
  const [filters, setFilters] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    search: parseAsString.withDefault(""),
    makes: parseAsString.withDefault("all"),
    types: parseAsString.withDefault("all"),
  });

  const resetFilters = async () => {
    await setFilters(
      Object.fromEntries(
        Object.keys(filters).map((key) => [key, key === "page" ? 1 : null]),
      ),
    );
  };

  // 🔹 Сброс конкретного фильтра
  const resetFilterByKey = async <K extends keyof typeof filters>(key: K) => {
    const defaultValue =
      key === "page"
        ? 1
        : Array.isArray(filters[key])
          ? []
          : typeof filters[key] === "object" && filters[key] !== null
            ? null
            : null;

    await setFilters({ [key]: defaultValue });
  };

  const updateFilter = async <K extends keyof typeof filters>(
    key: K,
    value: (typeof filters)[K],
  ) => {
    await setFilters({ [key]: value });
  };

  return { filters, setFilters, resetFilters, resetFilterByKey, updateFilter };
}
