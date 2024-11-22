import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../../../pages/Home";
import { NotFoundPage } from "../../../pages/NotFound";
import { ROUTES } from "../../../constants/Routes";

export const RoutesPrivate = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.not_found,
    element: <NotFoundPage />,
  },
]);
