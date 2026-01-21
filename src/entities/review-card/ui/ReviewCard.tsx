import Icon from "@/shared/icon";
import { motion } from "motion/react";
import type { ReviewCardType } from "../model/review-card.type";

interface ReviewCardProps extends ReviewCardType{
  index: number; 
}

const ReviewCard = ({rating, name, content, company, image, role, index}: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-violet-200 transition-all duration-300 hover:shadow-xl"
    >
      <Icon icon="quote" className="size-10 text-orange-200 mb-4" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Icon
            key={i}
            icon="star"
            className="size-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        "{content}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">
            {role} @ {company}
          </div>
        </div>
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-amber-600 opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ReviewCard;
