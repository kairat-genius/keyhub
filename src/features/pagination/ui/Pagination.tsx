interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  // --- ЛОГИКА: Вычисление отображаемых страниц ---
  const getPaginationItems = () => {
    const pages = [];

    // Если страниц мало (например, 7 или меньше), показываем все
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Если страниц много, используем логику с многоточием
    const leftSide = currentPage - 1;
    const rightSide = currentPage + 1;

    // Всегда добавляем первую страницу
    pages.push(1);

    // Логика для левого многоточия
    if (leftSide > 2) {
      pages.push("...");
    } else if (leftSide === 2) {
      pages.push(2); // Если разрыв всего в одну цифру, лучше показать цифру, а не точки
    }

    // Центральная часть (текущая, +1 слева, +1 справа)
    // Исключаем 1 и totalPages, чтобы не дублировать, так как они добавляются отдельно
    for (
      let i = Math.max(2, leftSide);
      i <= Math.min(totalPages - 1, rightSide);
      i++
    ) {
      pages.push(i);
    }

    // Логика для правого многоточия
    if (rightSide < totalPages - 1) {
      pages.push("...");
    } else if (rightSide === totalPages - 1) {
      pages.push(totalPages - 1);
    }

    // Всегда добавляем последнюю страницу
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPaginationItems();

  // --- РЕНДЕР: Семантика и Структура ---
  if (totalPages <= 1) return null; // Не показываем пагинацию, если страница всего одна

  return (
    <nav aria-label="Pagination Navigation">
      <ul className="pagination-list">
        {/* Кнопка "Назад" */}
        <li>
          <button
            className="pagination-btn"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            &lt; {/* Символ < */}
          </button>
        </li>

        {/* Список страниц */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <li key={`dots-${index}`} className="pagination-dots">
                <span>&hellip;</span>
              </li>
            );
          }

          return (
            <li key={page}>
              <button
                className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => typeof page === "number" && onPageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            </li>
          );
        })}

        {/* Кнопка "Вперед" */}
        <li>
          <button
            className="pagination-btn"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            &gt; {/* Символ > */}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
