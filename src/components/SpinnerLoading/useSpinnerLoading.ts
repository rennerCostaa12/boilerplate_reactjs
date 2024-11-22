import { VariantSpinnerLoadingProps } from "./types";
import { checkLightThemeApplication } from "../../utils/checkLightThemeApplication";
import { DarkTheme } from "../../styles/Theme/DarkTheme";
import { LightTheme } from "../../styles/Theme/LightTheme";

export const useSpinnerLoading = () => {
  const switchColorSpinnerLoading = (
    variantSpinner: VariantSpinnerLoadingProps | undefined
  ) => {
    switch (variantSpinner) {
      case "primary":
        return checkLightThemeApplication()
          ? LightTheme.colors.primary
          : DarkTheme.colors.primary;
      case "secondary":
        return checkLightThemeApplication()
          ? LightTheme.colors.secondary
          : DarkTheme.colors.secondary;
      case "success":
        return checkLightThemeApplication()
          ? LightTheme.colors.success
          : DarkTheme.colors.success;
      case "error":
        return checkLightThemeApplication()
          ? LightTheme.colors.error
          : DarkTheme.colors.error;
      case "warning":
        return checkLightThemeApplication()
          ? LightTheme.colors.error
          : DarkTheme.colors.error;
      default:
        return checkLightThemeApplication()
          ? LightTheme.colors.primary
          : DarkTheme.colors.primary;
    }
  };

  return {
    switchColorSpinnerLoading,
  };
};
