import { Button } from "./styles";
import { IButtonContentProps } from "./types";

import { SpinnerLoading } from "../../SpinnerLoading";
import { useButton } from "../useButton";

export const ButtonContent = ({
  children,
  size,
  variant,
  fullWidth,
  loading,
  icon,
  ...props
}: IButtonContentProps) => {
  const { switchSizeButton, switchVariantButton } = useButton();

  const { width, height } = switchSizeButton(size);
  const variantButton = switchVariantButton(variant);

  return (
    <Button
      fullWidth={fullWidth}
      width={width}
      height={height}
      variantColorButton={variantButton}
      {...props}
      disabled={loading}
    >
      {loading ? (
        <SpinnerLoading width={20} height={20} />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </Button>
  );
};
