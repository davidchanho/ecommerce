import styled from "styled-components";
import { PickersProps } from "./Pickers.types";

export const PickersContainer = styled.fieldset`
    display: flex;
    gap: 20px;
    border: 0;
`;

export const Picker = styled.input.attrs((props) => ({
    type: "radio",
}))<PickersProps>`
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    transform: scale(1);

    &::before {
        content: "";
        width: 1.4em;
        height: 1.4em;
        border-radius: 50%;
        box-shadow: inset 1em 1em ${(props) => props.color};
    }

    &:checked {
        border: 0.1em solid ${(props) => props.color};
    }
`;
