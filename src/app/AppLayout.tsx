import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import { Outlet } from "react-router";
import Loader from "@/shared/ui/loader";
import { Suspense } from "react";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-17">
        <Suspense fallback={<Loader fullScreen />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
