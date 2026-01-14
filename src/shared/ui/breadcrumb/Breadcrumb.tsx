import { Link } from "react-router";

interface BreadcrumbProps {
  items: {
    title: string;
    href?: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="pl-10 pb-3.75">
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center text-[13.6px]">
          <Link to="/" className="link">
            Журнал
          </Link>
          <span className="px-1.25 text-muted">→</span>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center text-[13.6px]">
              {item.href && !isLast ? (
                <Link to={item.href} className="link">
                  {item.title}
                </Link>
              ) : (
                <span>{item.title}</span>
              )}

              {!isLast && <span className="px-1.25 text-muted">→</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
