import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import { getRouteTitle } from "../lib/routeTitles";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const HomePage = lazy(() => import("../pages/Home"));
const HotelsPage = lazy(() => import("../pages/Hotels"));
const BlogPage = lazy(() => import("../pages/Blog"));
const ContactPage = lazy(() => import("../pages/Contact"));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "hotels",
        element: <HotelsPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  // =========================
  // Not Authorized
  // =========================
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
]);

// function updateDocumentTitle(location) {
//   const locale = localStorage.getItem("locale") || "en";
//   document.title = getRouteTitle(location.pathname, locale);
// }

// updateDocumentTitle(router.state.location);
// router.subscribe(({ location }) => {
//   updateDocumentTitle(location);
// });
