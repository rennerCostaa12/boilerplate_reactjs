import { ReactNode } from "react";

export type VariantTitleProps =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export interface ITypographyProps {
  variant: VariantTitleProps;
  align?: AlignElementsProps | undefined;
  children: ReactNode;
}
