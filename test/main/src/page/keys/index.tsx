import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Button } from "@/app/components/ui/button";
import keyImage from "@/assets/95505d4ee000f9810ff5b47d6c3efbc8f55c090d.png";

// Data for car keys
const keysData = [
  {
    id: 1,
    make: "Mazda",
    model: "CX-5",
    year: "2021",
    title: "Smart Key Proximity",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 2,
    make: "Mazda",
    model: "Mazda3",
    year: "2020",
    title: "Keyless Entry Remote",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 3,
    make: "Mazda",
    model: "CX-9",
    year: "2019",
    title: "Advanced Smart Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 4,
    make: "Toyota",
    model: "Camry",
    year: "2022",
    title: "Smart Key System",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 5,
    make: "Toyota",
    model: "RAV4",
    year: "2021",
    title: "Proximity Smart Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 6,
    make: "Honda",
    model: "Accord",
    year: "2020",
    title: "Smart Entry Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 7,
    make: "Honda",
    model: "CR-V",
    year: "2021",
    title: "Keyless Access Remote",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 8,
    make: "Nissan",
    model: "Altima",
    year: "2019",
    title: "Intelligent Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 9,
    make: "Nissan",
    model: "Rogue",
    year: "2020",
    title: "Smart Key Fob",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 10,
    make: "Hyundai",
    model: "Sonata",
    year: "2021",
    title: "Smart Key Remote",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 11,
    make: "Hyundai",
    model: "Tucson",
    year: "2020",
    title: "Proximity Key Fob",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 12,
    make: "Kia",
    model: "Optima",
    year: "2019",
    title: "Smart Key Entry",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 13,
    make: "Kia",
    model: "Sportage",
    year: "2021",
    title: "Keyless Smart Remote",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 14,
    make: "Ford",
    model: "Fusion",
    year: "2020",
    title: "Intelligent Access Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 15,
    make: "Ford",
    model: "Escape",
    year: "2021",
    title: "Smart Proximity Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 16,
    make: "Chevrolet",
    model: "Malibu",
    year: "2019",
    title: "Remote Keyless Entry",
    market: "US",
    type: "Remote Key",
    image: keyImage,
  },
  {
    id: 17,
    make: "Chevrolet",
    model: "Equinox",
    year: "2020",
    title: "Smart Key Fob",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 18,
    make: "Subaru",
    model: "Outback",
    year: "2021",
    title: "Keyless Access Fob",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 19,
    make: "Subaru",
    model: "Forester",
    year: "2020",
    title: "Proximity Smart Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 20,
    make: "Volkswagen",
    model: "Jetta",
    year: "2019",
    title: "Smart Key Remote",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 21,
    make: "Volkswagen",
    model: "Tiguan",
    year: "2021",
    title: "Keyless Entry System",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 22,
    make: "BMW",
    model: "3 Series",
    year: "2020",
    title: "Comfort Access Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 23,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: "2021",
    title: "Keyless Go Fob",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 24,
    make: "Audi",
    model: "A4",
    year: "2020",
    title: "Advanced Key System",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
  {
    id: 25,
    make: "Lexus",
    model: "ES",
    year: "2021",
    title: "Smart Access Key",
    market: "US",
    type: "Smart Key",
    image: keyImage,
  },
];

const ITEMS_PER_PAGE = 10;

const KeysPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMake, setFilterMake] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredKeys = keysData.filter((key) => {
    const matchesSearch =
      key.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      key.year.includes(searchTerm);
    const matchesMake = filterMake === "all" || key.make === filterMake;
    const matchesType = filterType === "all" || key.type === filterType;
    return matchesSearch && matchesMake && matchesType;
  });

  const totalPages = Math.ceil(filteredKeys.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentKeys = filteredKeys.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl text-gray-900">Keys</h1>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-3">
            <Select value={filterMake} onValueChange={setFilterMake}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Makes</SelectItem>
                <SelectItem value="Mazda">Mazda</SelectItem>
                <SelectItem value="Toyota">Toyota</SelectItem>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="Nissan">Nissan</SelectItem>
                <SelectItem value="Hyundai">Hyundai</SelectItem>
                <SelectItem value="Kia">Kia</SelectItem>
                <SelectItem value="Ford">Ford</SelectItem>
                <SelectItem value="Chevrolet">Chevrolet</SelectItem>
                <SelectItem value="Subaru">Subaru</SelectItem>
                <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                <SelectItem value="BMW">BMW</SelectItem>
                <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                <SelectItem value="Audi">Audi</SelectItem>
                <SelectItem value="Lexus">Lexus</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Smart Key">Smart Key</SelectItem>
                <SelectItem value="Remote Key">Remote Key</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <div className="w-full">
              <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                <div className="px-6 py-3 text-xs text-gray-600">Image</div>
                <div className="px-6 py-3 text-xs text-gray-600">Make</div>
                <div className="px-6 py-3 text-xs text-gray-600">Model</div>
                <div className="px-6 py-3 text-xs text-gray-600">
                  Model Year
                </div>
                <div className="px-6 py-3 text-xs text-gray-600">Title</div>
                <div className="px-6 py-3 text-xs text-gray-600">Market</div>
                <div className="px-6 py-3 text-xs text-gray-600">Type</div>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {currentKeys.map((key) => (
                  <a
                    key={key.id}
                    href={`/detail/`}
                    className="grid grid-cols-7 items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="px-6 py-4">
                      <img
                        src={key.image}
                        alt={key.title}
                        className="h-20 w-28 rounded-md object-contain"
                      />
                    </div>

                    <div className="px-6 py-4 text-sm text-gray-900">
                      {key.make}
                    </div>

                    <div className="px-6 py-4 text-sm text-gray-900">
                      {key.model}
                    </div>

                    <div className="px-6 py-4 text-sm text-gray-900">
                      {key.year}
                    </div>

                    <div className="px-6 py-4 text-sm text-gray-900">
                      {key.title}
                    </div>

                    <div className="px-6 py-4 text-sm text-gray-900">
                      {key.market}
                    </div>

                    <div className="px-6 py-4 text-sm text-gray-900">
                      {key.type}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {filteredKeys.length > 0 && (
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredKeys.length)} of {filteredKeys.length}{" "}
              results
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className={
                        currentPage === page
                          ? "bg-purple-600 text-white hover:bg-purple-700"
                          : ""
                      }
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="gap-1"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeysPage;
