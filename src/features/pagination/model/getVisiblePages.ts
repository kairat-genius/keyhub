export const getVisiblePages = (
  currentPage: number,
  totalPages: number,
  visibleCount = 3
) => {
  const half = Math.floor(visibleCount / 2);

  let start = Math.max(1, currentPage - half);
  const end = Math.min(totalPages, start + visibleCount - 1);

  // если упёрлись в конец — сдвигаем назад
  if (end - start + 1 < visibleCount) {
    start = Math.max(1, end - visibleCount + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
