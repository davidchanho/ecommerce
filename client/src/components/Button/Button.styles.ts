import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
    border: 0;
    border-radius: ${({ theme: { borders } }) => borders.rounded};
    display: inline-block;
    height: 40px;
    font-weight: 700;

    color: ${({ primary, theme: { colors } }) =>
        primary ? colors.white : "#333"};
    background-color: ${({ primary, danger, icon, theme: { colors } }) =>
        primary
            ? colors.primary
            : icon
            ? colors.inherit
            : danger
            ? colors.danger
            : colors.white};
    box-shadow: ${({ primary, icon }) =>
        primary || icon ? "" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};

    // Icon
    svg {
        fill: ${({ icon, theme: { colors } }) => icon && colors.primary};
    }

    // Circle button
    width: ${({ circle }) => (circle ? "25px" : "100px")};
    border-radius: ${({ circle }) => circle && "50%"};

    &:hover {
        cursor: pointer;
        background-color: ${({ primary, danger, theme: { colors } }) =>
            primary
                ? colors.primaryHover
                : danger
                ? colors.danger
                : colors.white};
        box-shadow: ${({ primary, icon, theme: { colors } }) =>
            primary || icon
                ? ""
                : `${colors.primaryHover} 0px 0px 0px 1px inset`};
        color: ${({ primary, theme: { colors } }) =>
            primary ? "" : colors.primaryHover};
    }
`;
