import {
  SizeInputContentProps,
  ColorInputContentProps,
} from "./InputContent/types";

import { checkLightThemeApplication } from "../../utils/checkLightThemeApplication";

import { DarkTheme } from "../../styles/Theme/DarkTheme";
import { LightTheme } from "../../styles/Theme/LightTheme";

export const useInput = () => {
  const switchSizeInput = (size: SizeInputContentProps | undefined) => {
    switch (size) {
      case "small":
        return { width: 160, height: 32 };
      case "medium":
        return { width: 240, height: 40 };
      case "large":
        return { width: 320, height: 48 };
      default:
        return { width: 240, height: 40 };
    }
  };

  const switchColorInput = (colorInput: ColorInputContentProps | undefined) => {
    switch (colorInput) {
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
    switchSizeInput,
    switchColorInput,
  };
};
