import styled from "styled-components";

interface IContainerProps {
  fullWidth: boolean;
}

interface IInputProps {
  widthInput: number;
  heightInput: number;
  fullWidth: boolean;
  outlineColor: string;
  errorInput: boolean;
}

interface IMessageProps {
  error: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<IInputProps>`
  border-radius: 5px;
  padding: 0 10px;
  border: 2px solid
    ${({ theme, errorInput }) =>
      errorInput ? theme.colors.error : theme.colors.text};
  width: ${({ widthInput, fullWidth }) =>
    fullWidth ? "100%" : `${widthInput}px`};
  height: ${({ heightInput }) => heightInput}px;
  outline-color: ${({ outlineColor, errorInput, theme }) =>
    errorInput ? theme.colors.error : outlineColor};
`;

export const Message = styled.span<IMessageProps>`
  display: block;
  margin-top: 0.3rem;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ error, theme }) =>
    error ? theme.colors.error : theme.colors.text};
`;
