import { SizeButtonProps, VariantsProps } from "./ButtonRoot/types";
import { checkLightThemeApplication } from "../../utils/checkLightThemeApplication";
import { DarkTheme } from "../../styles/Theme/DarkTheme";
import { LightTheme } from "../../styles/Theme/LightTheme";

export const useButton = () => {
  const switchSizeButton = (sizeButton: SizeButtonProps | undefined) => {
    switch (sizeButton) {
      case "small":
        return { width: 80, height: 32 };
      case "medium":
        return { width: 120, height: 40 };
      case "large":
        return { width: 160, height: 48 };
      default:
        return { width: 120, height: 40 };
    }
  };

  const switchVariantButton = (
    variantColorButton: VariantsProps | undefined
  ) => {
    switch (variantColorButton) {
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
    switchSizeButton,
    switchVariantButton,
  };
};
