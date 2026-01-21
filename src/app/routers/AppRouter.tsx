import { createBrowserRouter } from "react-router";
import AppLayout from "../AppLayout";
import Loader from "@/shared/ui/loader";
import NotFound from "@/shared/ui/NotFound";
import ErrorPage from "@/shared/ui/ErrorPage";

export const router = createBrowserRouter([
  {
    HydrateFallback: Loader,
    errorElement: <ErrorPage />,
    element: <AppLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const HomePage = await import("@/pages/home");
          return { Component: HomePage.default };
        },
      },
      {
        path: "about-us",
        lazy: async () => {
          const AboutUsPage = await import("@/pages/about-us");
          return { Component: AboutUsPage.default };
        },
      },
      {
        path: "keys",
        lazy: async () => {
          const Page = await import("@/pages/keys");
          return { Component: Page.default };
        },
      },
      {
        path: "keys/:slug",
        lazy: async () => {
          const Page = await import("@/pages/detail");
          return { Component: Page.default };
        },
      },

      {
        path: "terms-and-conditions",
        lazy: async () => {
          const AboutUsPage = await import("@/pages/terms-and-conditions");
          return { Component: AboutUsPage.default };
        },
      },
      {
        path: "privacy-policy",
        lazy: async () => {
          const AboutUsPage = await import("@/pages/privacy-policy");
          return { Component: AboutUsPage.default };
        },
      },
      {
        path: "login",
         lazy: async () => {
          const AboutUsPage = await import("@/features/auth/login-form");
          return { Component: AboutUsPage.default };
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
