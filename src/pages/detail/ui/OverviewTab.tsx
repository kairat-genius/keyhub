import Separator from "@/shared/ui/separator";
import { universal_keys } from "../model/overview-tab";
import KeyDisclosure from "@/entities/key-disclosure";

const OverviewTab = () => {
  return (
    <>
      <div id="overview">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Overview</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <p className="text-gray-600">Key Type</p>
            <p className="font-medium">Smart Key</p>
          </div>
          <div>
            <p className="text-gray-600">Markets</p>
            <p className="font-medium">EU, USA, AUD</p>
          </div>
          <div>
            <p className="text-gray-600">Transponder</p>
            <p className="font-medium">
              8CH (HT-PSKR / RFAG TRG){" "}
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                Integrated
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-600">Frequency</p>
            <p className="font-medium">433 MHz</p>
          </div>
          <div>
            <p className="text-gray-600">Battery</p>
            <p className="font-medium">CR2025</p>
          </div>
          <div>
            <p className="text-gray-600">Transponder Cloning</p>
            <p className="font-medium">No</p>
          </div>
          <div>
            <p className="text-gray-600">Skill Level</p>
            <span className="inline-flex px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              MEDIUM
            </span>
          </div>
        </div>
      </div>
      <Separator />
      <div id="reference-times-and-prices">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Reference Times and Prices</h2>
        <div className="grid gap-x-8 gap-y-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
            <div className="flex justify-between font-medium">
              <p>Add key</p>
              <p>⏱ 30 min 200 €</p>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              One new key when a working key is available
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
            <div className="flex justify-between font-medium">
              <p>Add key</p>
              <p>⏱ 90 min 350 €</p>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Two new keys when no keys are available
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <div id="keys">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Keys</h2>

        <div className="grid gap-x-8 gap-y-4 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
          <div>
            <h3 className="text-lg font-bold mb-4">Universal Keys</h3>
            <div className="space-y-3 mb-8">
              {universal_keys.map((key) => (
                <KeyDisclosure {...key} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Original Keys</h3>
            <div className="space-y-3">
              {universal_keys.map((key) => (
                <KeyDisclosure {...key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewTab;
