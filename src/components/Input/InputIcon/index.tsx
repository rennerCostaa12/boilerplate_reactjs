import { Container } from "./styles";
import { IInputIconProps } from "./types";

export const InputIcon = ({ icon }: IInputIconProps) => {
  return (
    <Container>
      {icon}
    </Container>
  )
};
