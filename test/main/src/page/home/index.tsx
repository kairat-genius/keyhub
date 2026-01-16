import { NewHero } from "@/page/home/NewHero";
import { NewFeatures } from "@/page/home/NewFeatures";
import { NewShowcase } from "@/page/home/NewShowcase";
import { NewTestimonials } from "@/page/home/NewTestimonials";
import { NewPricing } from "@/page/home/NewPricing";

const HomePage = () => {
  return (
    <>
      <NewHero />
      <NewFeatures />
      <NewShowcase />
      <NewTestimonials />
      <NewPricing />
    </>
  );
};

export default HomePage;
