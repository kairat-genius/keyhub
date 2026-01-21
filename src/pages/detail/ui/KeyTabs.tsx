import { useState, lazy, Suspense } from "react";
import Loader from "@/shared/ui/loader";
import Tabs from "@/shared/ui/tabs";
import Sidebar from "./Sidebar";
const MediaTab = lazy(() => import("./MediaTab"));
const OverviewTab = lazy(() => import("./OverviewTab"));
const ProgrammingTab = lazy(() => import("./ProgrammingTab"));
const ProfilesTab = lazy(() => import("./ProfilesTab"));
const CodeSeriesTab = lazy(() => import("./CodeSeriesTab"));

type TabValue =
  | "overview"
  | "programming"
  | "profiles"
  | "codeseries"
  | "media";

const TABS: { value: TabValue; label: string }[] = [
  { value: "overview", label: "Overview" },
  { value: "programming", label: "Key Programming via OBD" },
  { value: "profiles", label: "Key Profiles" },
  { value: "codeseries", label: "Code Series" },
  { value: "media", label: "Media" },
];

const KeyTabs = () => {
  const [tab, setTab] = useState<TabValue>("overview");

  return (
    <>
      <Tabs<TabValue> value={tab} items={TABS} onChange={setTab} />
      <section className="flex gap-8 justify-between">
        <div className="space-y-6 flex-3">
          {tab === "overview" && <OverviewTab />}
          {tab === "programming" && (
            <Suspense fallback={<Loader halfScreen />}>
              <ProgrammingTab />
            </Suspense>
          )}
          {tab === "profiles" && (
            <Suspense fallback={<Loader halfScreen />}>
              <ProfilesTab />
            </Suspense>
          )}
          {tab === "codeseries" && (
            <Suspense fallback={<Loader halfScreen />}>
              <CodeSeriesTab />
            </Suspense>
          )}
          {tab === "media" && (
            <Suspense fallback={<Loader halfScreen />}>
              <MediaTab />
            </Suspense>
          )}
        </div>
        <Sidebar activeTab={tab} />
      </section>
    </>
  );
};

export default KeyTabs;
