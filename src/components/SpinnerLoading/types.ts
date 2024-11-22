export type VariantSpinnerLoadingProps =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning";

export interface ISpinnerLoadingProps {
  width?: number;
  height?: number;
  variant?: VariantSpinnerLoadingProps | undefined;
}
