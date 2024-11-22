import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "../../../pages/Login";
import { NotFoundPage } from "../../../pages/NotFound";
import { ROUTES } from "../../../constants/Routes";

export const RoutesPublic = createBrowserRouter([
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: ROUTES.not_found,
    element: <NotFoundPage />,
  },
]);
