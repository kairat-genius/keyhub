type TabValue =
  | "overview"
  | "programming"
  | "profiles"
  | "codeseries"
  | "media";

const links: Record<TabValue, string[]> = {
  overview: ["Overview", "Reference Times and Prices", "Keys"],
  programming: [
    "Overview",
    "Key Programming via OBD",
    "General Instructions",
    "Programmers",
  ],
  profiles: ["Key Profiles", "Code Series", "Key Cutting Media"],
  codeseries: ["Overview", "Key Profiles", "Decoding Tips"],
  media: [
    "Overview",
    "Instructions",
    "Media",
    "Synchronizing",
    "Key Circuitboard",
  ],
};

interface SidebarProps {
  activeTab: TabValue;
}

const Sidebar = ({ activeTab }: SidebarProps) => {
  return (
    <aside className="sticky top-24 flex-1 hidden lg:block">
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-bold mb-4">On this page</h3>
        <div className="space-y-2">
          {links[activeTab].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-gray-600 hover:text-gray-900"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
