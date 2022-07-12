import styled from "styled-components";

export const DropDownContainer = styled.div`
    width: 160px;
`;

export const DropDownHeader = styled.div`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: lightgrey;
    }
`;

export const DropDownListContainer = styled.div`
`;

export const DropDownList = styled.ul`
    border: 0.1rem lightgrey solid;
    list-style-type: none;
    padding: 0;
`;

export const DropDownListItem = styled.li`
    border-bottom: 0.1rem lightgrey solid;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: lightgrey;
    }
    &:last-child {
        border-bottom: none;
    }
`;
