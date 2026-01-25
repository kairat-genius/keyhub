import Icon from "@/shared/icon";
import { cn } from "@/shared/utils/clsx";
import { getVisiblePages } from "../model/getVisiblePages";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange?: (page: number) => void;
  className?: string;
}

const Pagination = ({ currentPage, onChange, totalPages, className }: PaginationProps) => {
  const pages = getVisiblePages(currentPage, totalPages);
  return (
    <nav aria-label="Pagination Navigation" className={cn("flex items-center gap-2", className)}>
      <button
        disabled={currentPage === 1}
        onClick={() => onChange?.(currentPage - 1)}
        className="cursor-pointer flex justify-center items-center gap-1 h-8 rounded-md px-2.5 text-sm font-medium border bg-background text-foreground hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <Icon icon="chevron" className="size-4 rotate-180" />
        Previous
      </button>

      <div className="flex gap-1">
        {pages.map((page) => (
          <button
            key={page}
            data-slot="button"
            onClick={() => onChange?.(page)}
            className={cn(
              "cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive h-8 rounded-md gap-1.5 px-3",
              currentPage === page
                ? "bg-orange-600 text-white hover:bg-orange-700"
                : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => onChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer flex justify-center items-center gap-1 h-8 rounded-md px-2.5 text-sm font-medium border bg-background text-foreground hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        Next
        <Icon icon="chevron" className="size-4" />
      </button>
    </nav>
  );
};

export default Pagination;
