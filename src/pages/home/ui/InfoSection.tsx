import Badge from "@/shared/ui/badge";

interface InfoSectionProps {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
}

const InfoSection = ({
  badge,
  title,
  description,
  imageSrc,
  isReversed = false,
}: InfoSectionProps) => {
  return (
    <section className="mx-auto px-4 max-w-7xl mb-16 lg:mb-36">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
          <Badge className="mb-4 text-sm">{badge}</Badge>

          <h2 className="text-foreground mb-6 text-xl leading-tight font-bold lg:text-4xl">
            {title}
          </h2>

          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>

        <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
          <div className="glow-lg relative w-full">
            <img
              src={imageSrc}
              alt={title}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default InfoSection;