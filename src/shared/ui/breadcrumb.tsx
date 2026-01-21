import { Link } from "react-router";
import Icon from "../icon";

interface BreadcrumbProps {
  items: {
    title: string;
    href?: string;
  }[];
  className?: string;
}

const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex gap-2 items-center">
              {item.href && !isLast ? (
                <Link to={item.href} className="hover:text-gray-900 ">
                  {item.title}
                </Link>
              ) : (
                <span className="font-medium text-gray-900">{item.title}</span>
              )}

              {!isLast && <Icon icon="chevron" className="size-4" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};



export default Breadcrumb;
