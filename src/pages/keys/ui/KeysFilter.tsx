import Select from "@/shared/ui/select";
import { useFiltersNuqs } from "../model/useNuqs";
import Icon from "@/shared/icon";

const MAKES = [
  {
    id: "all",
    name: "All Makes",
  },
  {
    id: "Mazda",
    name: "Mazda",
  },
];

const FilterKeys = () => {
  const { filters, updateFilter } = useFiltersNuqs();
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:w-96">
        <Icon
          icon="search"
          className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive pl-10"
          placeholder="Search..."
          onChange={(e) => updateFilter("search", e.target.value)}
          value={filters.search}
        />
      </div>
      <div className="flex gap-3">
        <Select
          value={filters.makes}
          items={MAKES}
          onChange={(val) => updateFilter("makes", val)}
        />
        <Select
          value={filters.types}
          items={MAKES}
          onChange={(val) => updateFilter("types", val)}
        />
      </div>
    </div>
  );
};

export default FilterKeys;
