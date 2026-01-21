type TabItemType<T extends string = string> = {
  value: T;
  label: string;
};

interface TabsProps<T extends string = string> {
  value: T;
  items: TabItemType<T>[];
  onChange: (value: T) => void;
}

const Tabs = <T extends string>({ items, value, onChange }: TabsProps<T>) => {
  return (
      <div
        className="text-muted-foreground h-9
         w-full md:w-fit items-center justify-center bg-white border 
         border-gray-200 p-1 rounded-lg inline-flex gap-1 
         overflow-x-auto 
         whitespace-nowrap
         [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        tabIndex={0}
        aria-orientation="horizontal"
      >
        {items.map((tab) => {
          const isActive = value === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              tabIndex={-1}
              aria-selected={isActive}
              onClick={() => onChange(tab.value)}
              className="shrink-0 cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground flex-1 items-center justify-center gap-1.5 border border-transparent text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-selected:bg-black aria-selected:text-white rounded-md px-4"
            >
              {tab.label}
            </button>
          );
        })}
      </div>
  );
};

export default Tabs;
