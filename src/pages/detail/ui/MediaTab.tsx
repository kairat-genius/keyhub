import Separator from "@/shared/ui/separator";

const MediaTab = () => {
  return (
    <>
      <div id="overview">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Overview</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-sm text-gray-600">Original key glued</p>
            <p className="font-medium">No</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Synchronizing</p>
            <p className="font-medium">Yes</p>
          </div>
        </div>
      </div>
      <Separator />

      {/* Instructions */}
      <div id="instructions">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Instructions</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>Keys has an integrated immobilizer chip.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>
                There is no need to synchronize or reprogram the key after
                replacing the battery.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      {/* Related images and videos */}
      <div id="media">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Related images and videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="aspect-video bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <p className="font-medium text-sm">Key Shell Replacement</p>
          </div>
        </div>
      </div>
      <Separator />
      {/* Synchronizing */}
      <div id="synchronizing">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Synchronizing</h2>
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="bg-gray-100 rounded p-4 mb-4">
            <pre className="text-xs text-gray-700 whitespace-pre-wrap">
              {`Key FOB - Power Saving Mode Procedure
(Illumination ON/OFF sequence)

1. Turn the ignition ON 6 times or more (within 10 seconds).
2. Turn the ignition to OFF and wait for confirmation sound
   at the same time lights blink 2 times.
3. Within 10 seconds press any FOB button to switch back to
   standard mode. If not pressed within 10 seconds
   wait 15-20 minutes and repeat from the beginning.
Confirmation: chime sound and hazard lights blink 4 times.`}
            </pre>
          </div>
          <p className="text-sm text-gray-600">
            Key FOB – Power Saving Mode Procedure
          </p>
        </div>
      </div>
      <Separator />
      {/* Key Circuitboard */}
      <div id="key-circuitboard">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Key Circuitboard</h2>
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1754572861240-5b3f5a5959ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljfGVufDF8fHx8MTc2ODgyNzQzMHww&ixlib=rb-4.1.0&q=80&w=400"
              alt="Circuit board front"
              className="w-full h-48 object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1754572861240-5b3f5a5959ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljfGVufDF8fHx8MTc2ODgyNzQzMHww&ixlib=rb-4.1.0&q=80&w=400"
              alt="Circuit board back"
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <p className="text-sm font-medium">SKE13E-01</p>
        </div>
      </div>
    </>
  );
};

export default MediaTab;
