import { createBrowserRouter } from "react-router";
import AppLayout from "../AppLayout";
import Loader from "@/shared/ui/loader";
import NotFound from "@/shared/ui/NotFound";
import ErrorPage from "@/shared/ui/ErrorPage";
import Auth from "@/widgets/auth";

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
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            handle: {
              title: "Welcome back 👋",
              subtitle:
                "Sign in to manage your car keys and access your dashboard.",
            },
            lazy: async () => {
              const Page = await import("@/features/auth/login-form");
              return { Component: Page.default };
            },
          },
          {
            path: "register",
            handle: {
              title: "Create your Keyhub account",
              subtitle:
                "Get started and keep all your car keys organized in one place.",
            },
            lazy: async () => {
              const Page = await import("@/features/auth/register-form");
              return { Component: Page.default };
            },
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
