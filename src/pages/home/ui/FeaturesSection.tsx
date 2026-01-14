import Badge from "@/shared/ui/badge";

const FeaturesSection = () => {
  return (
    <section className="mx-auto px-4 max-w-7xl mb-16 lg:mb-36 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-card rounded-lg border p-6 py-8 md:p-8 md:py-8">
        <div className="mb-6">
          <Badge className="mb-6">Accuracy</Badge>
        </div>
        <h3 className="text-foreground mb-3 text-3xl font-extrabold md:mb-6">
          All the Data in One Place
        </h3>
        <p className="text-muted-foreground text-lg">
          With over 3,000 verified car and key profiles, Keyhub gives you
          instant access to accurate, brand-specific procedures for programming
          and repairs. Whether you’re working on common models or rare vehicles,
          the answers you need are always at your fingertips – saving you time,
          effort, and stress.
        </p>
      </div>
      <div className="bg-card rounded-lg border p-6 py-8 md:p-8 md:py-8">
        <Badge className="mb-6">Timesaving</Badge>
        <h3 className="text-foreground mb-3 text-3xl font-extrabold md:mb-6">
          Work Faster, Save Hours
        </h3>
        <p className="text-muted-foreground text-lg">
          With centralised guidance, professionals are often 30-50% faster on
          common jobs and, in many cases can save days' worth of time that would
          otherwise be lost to searching and avoidable rework.
        </p>
      </div>
      <div className="bg-card rounded-lg border p-6 py-8 md:p-8 md:py-8">
        <div className="mb-6">
          <Badge className="mb-6">Knowledge</Badge>
        </div>
        <h3 className="text-foreground mb-3 text-3xl font-extrabold md:mb-6">
          Confidence in Every Job
        </h3>
        <p className="text-muted-foreground text-lg">
          Don’t risk broken keys, lost time, or frustrated customers. With
          Keyhub you follow a proven, step-by-step process tailored to
          each brand, model, and year. Every job gets done right the first time
          – faster, safer, and with full confidence.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
