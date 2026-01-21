import { useClickOutside } from "@/shared/hooks/useClickOutside";
import Icon from "@/shared/icon";
import { useState, useMemo, useRef } from "react";
import type { SelectProps } from "./select.type";
import { cn } from "@/shared/utils/clsx";

const Select = ({
  items,
  value,
  onChange,
  className,
}: SelectProps & { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const processedItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [items, search]);

  const selectedLabel = items.find((item) => item.id === value)?.name || value;

  return (
    <div className={cn("relative w-35", className)} ref={containerRef}>
      {/* --- Trigger (Кнопка открытия) --- */}
      <button
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border-input bg-input-background px-3 py-2 text-sm ring-offset-background focus:outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:opacity-50"
      >
        <span className={cn("pointer-events-none text-foreground font-medium")}>
          {selectedLabel}
        </span>
        <Icon
          icon="chevron"
          className={cn(
            "transition-transform duration-200 rotate-90",
            isOpen && "-rotate-90",
          )}
        />
      </button>

      {/* --- Dropdown Content (Выпадашка) --- */}
      {isOpen && (
        <div
          className="absolute top-[calc(100%+4px)] z-50 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          data-state={isOpen ? "open" : "closed"}
        >
          {/* --- Search Input (Стилизован под context menu search) --- */}
          <div className="flex items-center border-b px-2 py-1">
            <Icon icon="search" className="mr-2 size-4 shrink-0 opacity-50" />
            <input
              type="text"
              className="flex h-4 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>

          {/* --- List Items --- */}
          <ul className="max-h-50 overflow-y-auto p-1">
            {processedItems.length > 0 ? (
              processedItems.map((item) => {
                const isSelected = item.id === value;
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      onChange(item.id);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none transition-colors hover:bg-input-background hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <span className="truncate">{item.name}</span>

                    {/* Индикатор выбора (галочка) */}
                    {isSelected && (
                      <span className="absolute right-2 flex size-3.5 items-center justify-center">
                        <Icon icon="check" className="size-4" />
                      </span>
                    )}
                  </li>
                );
              })
            ) : (
              <li className="py-6 text-center text-sm text-muted-foreground">
                Nothing found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
