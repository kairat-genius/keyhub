import type { PricingCardType } from "@/entities/pricing-card";

export const pricingPlans: PricingCardType[] = [
  {
    name: "Monthly",
    icon: "calendar",
    price: 49,
    period: "per month",
    description: "Perfect for trying out",
    features: [
      "Unlimited access to all procedures",
      "500+ car models covered",
      "Step-by-step photo instructions",
      "Wiring diagrams & pin codes",
      "Video tutorials library",
      "Mobile & desktop access",
      "Email support",
    ],
    gradient: "from-amber-600 to-orange-600",
    popular: false,
  },
  {
    name: "Annual",
    icon: "crown",
    price: 39,
    period: "per month",
    billedAnnually: "$468 billed annually",
    description: "Best value for professionals",
    features: [
      "Everything in Monthly, plus:",
      "Save 20% compared to monthly",
      "Priority email support",
      "Early access to new features",
      "Downloadable PDF procedures",
      "Advanced search filters",
      "Bookmark favorite procedures",
      "No price increases for 12 months",
    ],
    gradient: "from-orange-600 to-amber-600",
    popular: true,
    savePercent: "20",
  },
];
