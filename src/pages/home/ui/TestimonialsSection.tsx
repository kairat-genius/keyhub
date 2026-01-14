import { testimonials } from "../model/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="mx-auto px-4 max-w-7xl mb-16 lg:mb-36">
      <h2 className="text-foreground mb-4 text-center text-2xl font-bold lg:text-5xl">
        What our client say
      </h2>
      <p className="text-muted-foreground mb-12 text-center text-lg lg:text-xl">
        Don't take our word for it – read the kind words of our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {testimonials.map(({ id, text, author, role }) => (
          <div
            key={id}
            className="border-border bg-card flex flex-col rounded-lg border p-6 shadow-sm h-full md:h-auto"
          >
            <blockquote className="text-muted-foreground mb-4 text-base lg:text-lg leading-relaxed">
              {text}
            </blockquote>
            <div className="mt-auto pt-2">
              <p className="text-foreground font-semibold">{author}</p>
              <p className="text-muted-foreground text-sm">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
