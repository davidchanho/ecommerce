import styled from "styled-components";
import { ChipProps } from "./ChipDisplay.types";

export const ChipDisplayContainer = styled.table`
    width: 800px;
    border-spacing: 20px;

    thead {
        tr {
            text-align: left;
        }
    }

    tbody {
        th {
            vertical-align: text-top;
            text-align: left;
            text-transform: capitalize;
        }
    }
`;

export const Chip = styled.div<ChipProps>`
    background-color: ${({ color }) => color};
    width: 300px;
    height: 50px;
    border: 1px solid black;
`;
