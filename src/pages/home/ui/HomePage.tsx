import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";
import InfoSection from "./InfoSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <InfoSection
        badge="Image Library"
        title="See Before You Program"
        description="With Keyhub, you don’t just read instructions – you see
              them. Our high-quality images provide a visual reference for each
              step of programming and repair, from wiring layouts to key slots.
              Pictures make it faster to identify parts, prepare tools, and
              avoid errors. By combining text with images, you get the complete
              support you need to work smarter and finish jobs faster."
        imageSrc="https://cdn.sanity.io/images/yslrid24/production/c10518d1cb1edbe18721857565915010f09cd03f-1752x1175.jpg"
      />

      <InfoSection
        badge="Watch &amp; Learn"
        title="From Database to Video Training"
        description="Keyhub isn’t just a database – it’s also a growing library
              of high-quality videos designed to make your work easier. Each
              video shows real programming and repair jobs, step by step, so you
              can see exactly how it’s done."
        imageSrc="https://cdn.sanity.io/images/yslrid24/production/2eeba5445ff2100f90a24832a835503c249cf39c-1248x1133.jpg"
        isReversed
      />
      <TestimonialsSection />
      <TeamSection />
    </>
  );
};

export default HomePage;
