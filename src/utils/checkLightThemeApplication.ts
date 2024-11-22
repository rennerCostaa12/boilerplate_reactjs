import { useLocalStorage } from "../hooks/useLocalStorage";

export const checkLightThemeApplication = () => {
  const { getItemStorage } = useLocalStorage();

  const responseLightThemeUsed = getItemStorage("@application:light_theme");

  if (responseLightThemeUsed || !responseLightThemeUsed) {
    return true;
  } else {
    return false;
  }
};
