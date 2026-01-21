import Separator from "@/shared/ui/separator";

const ProfilesTab = () => {
  return (
    <>
      <div id="key-profiles">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Key Profiles</h2>
        <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4">
            <div className="w-16 h-24 bg-gray-200 rounded"></div>
            <div>
              <p className="font-medium">MAZ24R</p>
              <p className="text-sm text-gray-600">3 decoders</p>
            </div>
        </div>
      </div>
      <Separator />
      <div id="code-series">
        <h2 className="text-xl md:text-2xlfont-bold mb-6">Code Series</h2>
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-gray-700">10100-12283 (10-10 Cuts)</p>
        </div>
      </div>
      <Separator />
      <div id="key-cutting-media">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Key Cutting Media</h2>
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="w-32 h-48 bg-gray-200 rounded mx-auto mb-4"></div>
          <p className="text-center font-medium">Emergency Key</p>
        </div>
      </div>
    </>
  );
};

export default ProfilesTab;
