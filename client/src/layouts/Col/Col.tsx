import styled from "styled-components";

interface ColProps {
    col?: number;
}

export const Col = styled.div<ColProps>`
    width: ${({ col = 6 }) => `${col * (100 / 12)}%`};
    background-color: inherit;
`;
