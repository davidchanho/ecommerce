import styled from "styled-components";

interface FormProps {
    horizontal?: boolean;
}

export const Form = styled.form<FormProps>`
    display: flex;
    flex-direction: ${({ horizontal }) => (horizontal ? "" : "column")};
    align-items: ${({ horizontal }) => (horizontal ? "center" : "")};
    gap: 10px;
    background-color: inherit;
`;

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 0.3rem;
`;

interface InputProps {
    error?: boolean;
    success?: boolean;
}

export const Input = styled.input<InputProps>`
    min-width: 150px;
    height: 26px;
    border: 1px solid
        ${({ error, success, theme: { colors } }) =>
            error ? colors.danger : success ? colors.success : colors.gray};
    border-radius: ${({ theme: { borders } }) => borders.rounded};
    padding-left: 0.2rem;

    &:focus,
    :active {
        border: 1px solid ${({ theme: { colors } }) => colors.primary};
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    margin: 0;
`;
