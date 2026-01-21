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
        <div className="overflow-hidden overflow-x-auto w-full rounded-lg border border-gray-200">
          <div className="hidden md:grid grid-cols-7 border-b border-gray-200 bg-gray-50">
            <div className="px-6 py-3 text-xs text-gray-600">Image</div>
            <div className="px-6 py-3 text-xs text-gray-600">Make</div>
            <div className="px-6 py-3 text-xs text-gray-600">Model</div>
            <div className="px-6 py-3 text-xs text-gray-600">Model Year</div>
            <div className="px-6 py-3 text-xs text-gray-600">Title</div>
            <div className="px-6 py-3 text-xs text-gray-600">Market</div>
            <div className="px-6 py-3 text-xs text-gray-600">Type</div>
          </div>
          <div className="divide-y divide-gray-100 bg-white">
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
