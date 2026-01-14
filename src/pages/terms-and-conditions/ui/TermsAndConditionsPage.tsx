import data from "../model/content.json";

const TermsAndConditionsPage = () => {
  return (
    <section className="mx-auto px-4 max-w-5xl mb-16 lg:mb-36">
      <h1 className="mt-8 mb-8 text-center text-3xl font-bold md:mt-24 md:text-6xl">
        {data.title}
      </h1>
      <p className="text-muted-foreground mb-12 text-center text-lg whitespace-pre-line lg:text-xl">
        {data.description}
      </p>
      <div className="prose max-w-none">
        {data.content.map((item, index) => {
          switch (item.type) {
            case "h2":
              return <h2 key={index}>{item.text}</h2>;
            case "h3":
              return <h3 key={index}>{item.text}</h3>;
            case "p":
              return <p key={index}>{item.text}</p>;
            case "html": {
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.content || "" }}
                />
              );
            }
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
