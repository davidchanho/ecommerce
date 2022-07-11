import { BiLoaderAlt } from "react-icons/bi";
import styled, { keyframes } from "styled-components";
import { LoaderProps } from "./Loader.types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(BiLoaderAlt)<LoaderProps>`
    animation: ${rotate} 2s linear infinite;
    width: ${({ size }) => (size ? `${size}px` : "12px")};
    height: ${({ size }) => (size ? `${size}px` : "12px")};
    color: ${({ color }) => color};
`;
