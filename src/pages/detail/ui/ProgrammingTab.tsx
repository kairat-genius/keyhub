import KeyDisclosure from "@/entities/key-disclosure";
import Separator from "@/shared/ui/separator";
import { programmers } from "../model/programmers";

const ProgrammingTab = () => {
  return (
    <>
      <div id="overview">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Overview</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <p className="text-gray-600">Add key</p>
            <p className="font-medium text-blue-600">OBD</p>
          </div>
          <div>
            <p className="text-gray-600">All keys lost</p>
            <p className="font-medium text-blue-600">OBD</p>
          </div>
          <div>
            <p className="text-gray-600">Program broken key</p>
            <p className="font-medium">No</p>
          </div>
          <div>
            <p className="text-gray-600">Pre-code programming</p>
            <p className="font-medium">No</p>
          </div>
          <div>
            <p className="text-gray-600">All keys read and backup</p>
            <p className="font-medium">Not specified</p>
          </div>
          <div>
            <p className="text-gray-600">Power cycles</p>
            <p className="font-medium">Not recommended or under 15.5D</p>
          </div>
          <div>
            <p className="text-gray-600">Additional cabin required</p>
            <p className="font-medium">No</p>
          </div>
          <div>
            <p className="text-gray-600">Number of live keys</p>
            <p className="font-medium">6</p>
          </div>
        </div>
      </div>
      <Separator />
      <div id="key-programming-via-obd">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          Key Programming via OBD
        </h2>

        <h3 className="text-lg font-bold mb-4">General Instructions</h3>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>
                There has to be always minimum two keys in the system.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>
                Before programming, insert the key, wait the more-less number
                the context can be found, an arrow will appear on the display.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>
                Special Function: 'Start the light steps' on be confirm 'Actual
                and Strong programmers.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">•</span>
              <span>
                After the ALL procedure, the volumen light may via scan if the
                car is correct. You can clear this fault code with a diagnostic
                tool, if you don't have one, simply drive the vehicle around for
                a short distance until the light should disappear if 7 'You log
                in valid.
              </span>
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-bold mb-4">Emergency Key Spot</h3>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
            
          </div>
          <p className="text-sm text-gray-600">
            This procedure won't close the car and should activate
            high-performance. Just be the signal slot. The old key does not need
            to be present.
          </p>
        </div>
        <h3 className="text-lg font-bold mb-4">Programmers</h3>
        <div className="space-y-3 mb-8">
          {programmers.map((key) => (
            <KeyDisclosure {...key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgrammingTab;
