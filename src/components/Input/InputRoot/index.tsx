import { Container } from "./styles";
import { IInputProps } from "./types";

export const InputRoot = ({ children }: IInputProps) => {
  return <Container>{children}</Container>;
};
