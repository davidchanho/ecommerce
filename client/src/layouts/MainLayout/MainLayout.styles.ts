import styled from "styled-components";
import { MainLayoutContainerProps } from "./MainLayout.types";

export const MainLayoutContainer = styled.div<MainLayoutContainerProps>`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    gap: ${({ gap }) => (gap ? gap : 0)}px;

    header {
        grid-area: 1 / 1 / 2 / 6;
    }
    aside {
        grid-area: 2 / 1 / 6 / 2;
    }
    main {
        grid-area: 2 / 2 / 6 / 6;
    }
`;
