import styled from "styled-components";

interface ITypographyDynamicProps {
  fontSizeInput: string;
  fontWeightInput: string;
  lineHeightInput: string;
  align: AlignElementsProps;
}

export const TypographyDynamic = styled.div<ITypographyDynamicProps>`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ fontSizeInput }) => fontSizeInput};
  font-weight: ${({ fontWeightInput }) => fontWeightInput};
  line-height: ${({ lineHeightInput }) => lineHeightInput};
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ align }) => align};
`;
