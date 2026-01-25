import Pagination from "@/features/pagination";
import { keysData } from "../model/keysData";
import KeyCard from "@/entities/key-card";
import FilterKeys from "./KeysFilter";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";



const KeysPage = () => {
  return (
    <NuqsAdapter>
      <div className="container min-h-screen bg-white py-8">
        {/* Header */}

        <h1 className="text-2xl text-gray-900 mb-6">Keys</h1>
        <FilterKeys />
        {/* Table */}
        <div className="overflow-hidden overflow-x-auto w-full md:rounded-lg md:border border-gray-200">
          <div className="hidden px-4 py-3 gap-4 md:grid grid-cols-[100px_1fr_1fr_1.5fr_2fr_1.5fr] border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
            <div/>
            <div>Make</div>
            <div>Model</div>
            <div>Model Year</div>
            <div>Title</div>
            <div>Market</div>
          </div>
          <div className="md:divide-y divide-gray-100 bg-white">
            {keysData.map((key, i) => (
              <KeyCard key={i} {...key} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">Showing results</div>
          <Pagination currentPage={1} totalPages={10} />
        </div>
      </div>
    </NuqsAdapter>
  );
};

export default KeysPage;
