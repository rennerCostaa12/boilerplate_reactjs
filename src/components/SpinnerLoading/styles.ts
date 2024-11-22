import styled from "styled-components";

interface ISpinnerProps {
  width?: number;
  height?: number;
  variant: string;
}

export const Spinner = styled.div<ISpinnerProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;;
    border: 3px solid ${({ variant }) => variant};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
