import { Container, Input, Message } from "./styles";
import { IInputContentProps } from "./types";

import { useInput } from "../useInput";

export const InputContent = ({
  fullWidth,
  sizeInput,
  message,
  color,
  errorInput,
  ...props
}: IInputContentProps) => {
  const { switchSizeInput, switchColorInput } = useInput();

  const { width, height } = switchSizeInput(sizeInput);
  const colorInput = switchColorInput(color);

  return (
    <Container fullWidth={Boolean(fullWidth)}>
      <Input
        errorInput={Boolean(errorInput)}
        widthInput={width}
        heightInput={height}
        fullWidth={Boolean(fullWidth)}
        outlineColor={colorInput}
        {...props}
      />
      {message && <Message error={Boolean(errorInput)}>{message}</Message>}
    </Container>
  );
};
