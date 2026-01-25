import { Link } from "react-router";
import type { KeyCardType } from "../model/key-card.type";

const KeyCard = ({
  title,
  market,
  image,
  make,
  model,
  year,
}: KeyCardType) => {
  return (
    <Link
      className="hover:bg-muted/50 flex items-center gap-4 p-4 transition-colors md:grid md:grid-cols-[100px_1fr_1fr_1.5fr_2fr_1.5fr] md:border-b md:last:border-b-0"
      to="/keys/4e95b621-fdc3-4f52-a8fa-5d24bbe56aee"
    >
      <img
        alt={title}
        loading="lazy"
        width={96}
        height={96}
        decoding="async"
        className="object-contain shrink-0"
        src={image}
      />

      <div className="flex flex-col gap-2 md:hidden">
        <span className="text-base font-medium">{title}</span>
        <div className="flex flex-wrap gap-1">
          <span className="inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground px-1.5 py-0 text-[10px]">
            {market}
          </span>
        </div>
      </div>
      <div className="hidden md:block">{make}</div>
      <div className="hidden md:block">{model}</div>
      <div className="hidden md:block">{model}, {year}</div>
      <div className="hidden md:block">{title}</div>
      <div className="hidden md:block">{market}</div>
    </Link>
  );
};

export default KeyCard;
