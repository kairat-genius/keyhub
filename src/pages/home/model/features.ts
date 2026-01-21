import type { FeatureCardType } from "@/entities/feature-card";

export const features: FeatureCardType[] = [
  {
    icon: "key",
    title: "Key Programming Guides",
    description:
      "Step-by-step instructions for programming keys, transponders, and remote controls for all major car brands.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: "book-open",
    title: "Detailed Procedures",
    description:
      "Comprehensive database with technical specifications, wiring diagrams, and pin codes for each vehicle model.",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: "video",
    title: "Video Tutorials",
    description:
      "Watch professional technicians demonstrate complex procedures with clear, high-quality training videos.",
    gradient: "from-orange-600 to-red-500",
  },
  {
    icon: "search",
    title: "Quick Search",
    description:
      "Find the exact procedure you need in seconds by searching make, model, year, or specific key type.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: "clock",
    title: "Regular Updates",
    description:
      "Database updated weekly with new car models, latest procedures, and industry best practices.",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: "shield",
    title: "Verified Information",
    description:
      "All procedures tested and verified by certified automotive locksmiths and technicians.",
    gradient: "from-orange-600 to-amber-600",
  },
];
