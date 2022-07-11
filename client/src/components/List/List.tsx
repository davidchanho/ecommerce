import styled from "styled-components";

export const List = styled.ul`
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding: 12px 14px;
    list-style-type: none;
    display: grid;
    gap: 8px;
    border-radius: ${({ theme: { borders } }) => borders.rounded};
`;

interface ListItemProps {
    text?: boolean;
    active?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding: 8px 12px;
    width: 150px;
    border-radius: ${({ theme: { borders } }) => borders.rounded};

    a {
        color: black;
        text-decoration: none;
    }

    color: ${({ active }) => active && "white"};
    background-color: ${({ active, theme: { colors } }) =>
        active && colors.primary};
    border-color: ${({ active, theme: { colors } }) =>
        active && colors.primary};

    &:hover {
        background-color: ${({ active, text, theme: { colors } }) =>
            text || active ? undefined : colors.lightGray};
        cursor: pointer;
    }
`;
