import { Container } from "./styles";
import { IButtonRootProps } from "./types";

export const ButtonRoot = ({ children }: IButtonRootProps) => {
  return <Container>{children}</Container>;
};
