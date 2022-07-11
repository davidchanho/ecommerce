import styled from "styled-components";

export const SizeOptionsContainer = styled.section`
    display: flex;
    gap: 5px;
    border: 0;

    button {
        text-transform: uppercase;
        &:active,
        &:focus {
            background-color: ${({ theme: { colors } }) => colors.primary};
            color: white;
        }
    }
`;
