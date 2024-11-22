import { VariantTitleProps } from "./types";

export const useTypography = () => {
  const switchVariantTitle = (variantTitle: VariantTitleProps) => {
    switch (variantTitle) {
      case "h1":
        return {
          tag: "h1",
          style: { fontSize: "32px", fontWeight: "bold", lineHeight: "40px" },
        };
      case "h2":
        return {
          tag: "h2",
          style: { fontSize: "28px", fontWeight: "bold", lineHeight: "36px" },
        };
      case "h3":
        return {
          tag: "h3",
          style: { fontSize: "24px", fontWeight: "bold", lineHeight: "32px" },
        };
      case "h4":
        return {
          tag: "h4",
          style: { fontSize: "20px", fontWeight: "bold", lineHeight: "28px" },
        };
      case "h5":
        return {
          tag: "h5",
          style: { fontSize: "16px", fontWeight: "bold", lineHeight: "24px" },
        };
      case "h6":
        return {
          tag: "h6",
          style: { fontSize: "14px", fontWeight: "bold", lineHeight: "20px" },
        };
      case "p":
        return {
          tag: "p",
          style: { fontSize: "16px", fontWeight: "normal", lineHeight: "24px" },
        };
      case "span":
        return {
          tag: "span",
          style: { fontSize: "14px", fontWeight: "normal", lineHeight: "20px" },
        };
      default:
        return {
          tag: "p",
          style: { fontSize: "16px", fontWeight: "normal", lineHeight: "24px" },
        };
    }
  };

  return {
    switchVariantTitle,
  };
};
