import { ITypographyProps } from "./types";
import { useTypography } from "./useTypography";
import { TypographyDynamic } from "./styles";

export const Typography = ({
  variant,
  children,
  align = "left",
}: ITypographyProps) => {
  const { switchVariantTitle } = useTypography();
  const {
    tag,
    style: { fontSize, fontWeight, lineHeight },
  } = switchVariantTitle(variant);

  return (
    <TypographyDynamic
      as={tag}
      fontSizeInput={fontSize}
      fontWeightInput={fontWeight}
      lineHeightInput={lineHeight}
      align={align}
    >
      {children}
    </TypographyDynamic>
  );
};
