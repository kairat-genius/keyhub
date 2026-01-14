import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import { Outlet } from "react-router";
import Loader from "@/shared/ui/loader/Loader";
import { Suspense } from "react";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
