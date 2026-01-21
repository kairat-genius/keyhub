import Breadcrumb from "@/shared/ui/breadcrumb";
import KeyTabs from "./KeyTabs";

const KeyDetail = () => {
  return (
    <div className="container py-8 flex flex-col gap-6">
      <Breadcrumb
        items={[{ title: "Keys", href: "/keys" }, { title: "detail" }]}
      />
      <section className="flex flex-col sm:flex-row gap-8">
        <img
          src="https://images.unsplash.com/photo-1728766919877-cebddde7e093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBrZXklMjBmb2IlMjBidXR0b25zfGVufDF8fHx8MTc2ODkyODUyMHww&ixlib=rb-4.1.0&q=80&w=400"
          alt="Key fob"
          className="object-contain max-h-40"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-xl sm:text-3xl font-bold">
            Abarth 124 Spider Mk1 (312) (2016-2020) Smart Key
          </h1>
          <p className="text-gray-600">Mazda Smart Key SKE13E</p>
        </div>
      </section>
      <KeyTabs />
    </div>
  );
};

export default KeyDetail;
