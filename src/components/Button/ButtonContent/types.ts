import { ButtonHTMLAttributes, ReactNode } from "react";

export type SizeButtonProps = "small" | "medium" | "large";
export type VariantsProps =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

export interface IButtonContentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  size?: SizeButtonProps | undefined;
  variant?: VariantsProps | undefined;
  fullWidth?: boolean;
  icon?: ReactNode;
}
