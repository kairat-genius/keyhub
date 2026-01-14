import Team from "@/widgets/team";

const TeamSection = () => {
  return (
    <section className="mx-auto px-4 max-w-5xl mb-16 lg:mb-36">
      <h2 className="text-foreground mb-4 text-center text-2xl font-bold lg:text-5xl">
        Meet Our Team
      </h2>
      <p className="text-muted-foreground mb-12 text-center text-lg whitespace-pre-line lg:text-xl">
        Our awesome team consists of seasoned professionals that love car keys
      </p>
      <Team />
    </section>
  );
};


export default TeamSection;