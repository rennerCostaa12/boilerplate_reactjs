import { InputHTMLAttributes} from "react";

export type SizeInputContentProps = "small" | "medium" | "large";
export type ColorInputContentProps =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning";

export interface IInputContentProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  message?: string | undefined;
  sizeInput?: SizeInputContentProps | undefined;
  color?: ColorInputContentProps | undefined;
  errorInput?: boolean;
}
