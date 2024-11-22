import { Spinner } from "./styles";
import { ISpinnerLoadingProps } from "./types";
import { useSpinnerLoading } from "./useSpinnerLoading";

export const SpinnerLoading = ({
  width = 30,
  height = 30,
  variant,
}: ISpinnerLoadingProps) => {
  const { switchColorSpinnerLoading } = useSpinnerLoading();

  const variantSpinner = switchColorSpinnerLoading(variant);

  return <Spinner variant={variantSpinner} width={width} height={height} />;
};
