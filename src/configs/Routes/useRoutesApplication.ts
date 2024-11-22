import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ROUTES } from "../../constants/Routes";

export const useRoutesApplication = () => {
  const { getItemStorage } = useLocalStorage();

  const checkUserLogged = () => {
    const responseUserLogged = getItemStorage("@application:user_data");

    if (responseUserLogged) {
      return true;
    } else {
      const isPageLogin = window.location.pathname === ROUTES.login;
      const isRoutesExists = Object.values(ROUTES).includes(
        window.location.pathname
      );

      if (!isPageLogin && isRoutesExists) {
        window.location.href = "/login";
      }

      return false;
    }
  };

  return {
    checkUserLogged,
  };
};
