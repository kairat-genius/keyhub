import { Link } from "react-router";
import type { KeyCardType } from "../model/key-card.type";

const KeyCard = ({
  title,
  market,
  type,
  image,
  make,
  model,
  year,
}: KeyCardType) => {
  return (
    <Link
      to="/keys/sss"
      className="
        grid grid-cols-[auto_1fr] gap-x-4 gap-y-1
        px-4 py-4 hover:bg-gray-50 transition-colors
        md:grid-cols-7 md:items-center md:px-0
      "
    >
      {/* Image */}
      <div className="row-span-6 md:row-span-1 md:px-6">
        <img
          src={image}
          alt={title}
          className="h-full md:h-20 w-28 rounded-md object-contain"
        />
      </div>

      {/* Make */}
      <div className="col-start-2 text-sm text-gray-900 md:col-auto md:px-6">
        {make}
      </div>

      {/* Model */}
      <div className="col-start-2 text-sm text-gray-900 md:col-auto md:px-6">
        {model}
      </div>

      {/* Year */}
      <div className="col-start-2 text-sm text-gray-900 md:col-auto md:px-6">
        {year}
      </div>

      {/* Title */}
      <div className="col-start-2 text-sm text-gray-900 md:col-auto md:px-6">
        {title}
      </div>

      {/* Market */}
      <div className="col-start-2 text-sm text-gray-900 md:col-auto md:px-6">
        {market}
      </div>

      {/* Type */}
      <div className="col-start-2 text-sm text-gray-900 md:col-auto md:px-6">
        {type}
      </div>
    </Link>
  );
};

export default KeyCard;
