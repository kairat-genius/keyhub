import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="mx-auto px-4 flex flex-col justify-center items-center mb-16 md:mb-48">
      <div className="flex flex-col justify-center items-center text-center py-16 lg:py-24 max-w-5xl">
        <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold lg:text-7xl">
          Stop wasting time searching - start programming
        </h1>
        <p className="text-muted-foreground mb-8 max-w-3xl text-lg tracking-wide lg:text-xl">
          Keyhub gives you instant access to car key programming
          instructions and data. No more guessing, no more digging.
        </p>
        <div className="flex w-full justify-center">
          <Link
            className="w-full sm:w-max bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium transition-colors"
            to="/keys"
          >
            Browse Keys
          </Link>
        </div>
      </div>
      <div className="max-w-300">
        <img
          alt=""
          decoding="async"
          className="h-auto rounded-2xl mx-auto max-w-full"
          src="https://cdn.sanity.io/images/yslrid24/production/d812e48fde4fd41d3a2807c756f221c06399f74d-2788x2068.png?w=2788&amp;h=2068"
        />
      </div>
    </section>
  );
};

export default HeroSection;
