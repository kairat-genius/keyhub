import Separator from "@/shared/ui/separator";

const CodeSeriesTab = () => {
  return (
    <>
      <div id="overview">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Overview</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-sm text-gray-600">Double locked</p>
            <p className="font-medium">No</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Decoder capability</p>
            <p className="font-medium">Door Lock Root/Trunk</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Opening direction (LHD)</p>
            <p className="font-medium">Counter-clockwise</p>
          </div>
        </div>
      </div>

      <Separator />

      <div id="key-profiles">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Key Profiles</h2>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-24 bg-gray-200 rounded"></div>
            <div>
              <p className="font-medium">MAZ24R</p>
              <p className="text-sm text-gray-600">3 decoders</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />
      <div id="decoding-tips">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Decoding Tips</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>Positions 1 and 2 are not used in the door lock</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>
                The parity of cuts must alternate: ODD-EVEN, or EVEN-ODD
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>
                To decode the lock, read in the SAME direction as it was picked.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CodeSeriesTab;
