import type { IconName } from "@/shared/icon/type";

export type PricingCardType = {
    icon: IconName;
    name: string;
    description: string;
    price: number;
    period: string;
    features: string[];
    billedAnnually?: string;
    gradient: string;
    popular: boolean;
    savePercent?: string;
}