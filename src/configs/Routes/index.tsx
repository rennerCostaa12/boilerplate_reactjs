import { RouterProvider } from "react-router-dom";

import { useRoutesApplication } from "./useRoutesApplication";
import { RoutesPrivate } from "./RoutesPrivate";
import { RoutesPublic } from "./RoutesPublic";

export const RoutesApplication = () => {
  const { checkUserLogged } = useRoutesApplication();

  return (
    <RouterProvider router={checkUserLogged() ? RoutesPrivate : RoutesPublic} />
  );
};
