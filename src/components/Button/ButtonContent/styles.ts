import styled from "styled-components";

interface IButtonProps {
  width: number;
  height: number;
  variantColorButton: string;
  fullWidth?: boolean;
}

export const Button = styled.button<IButtonProps>`
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: ${({ fullWidth, width }) => (fullWidth ? "100%" : `${width}px`)};
  height: ${({ height }) => height}px;
  background-color: ${({ variantColorButton }) => variantColorButton};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.surface};
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.buttonDisabled};
  }
`;
