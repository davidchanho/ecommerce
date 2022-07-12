import styled from "styled-components";

export const BreadcrumbsContainer = styled.div`
    width: 360px;
    display: flex;
    justify-items: space-between;
    align-items: center;

    a {
        text-decoration: none;
    }

    p,
    a {
        text-transform: capitalize;
    }

    
`;

export const Breadcrumb = styled.a`
    text-decoration: none;
    text-transform: capitalize;
`;

export const CurrentBreadcrumb = styled.p`
    text-transform: capitalize;
`;

export const BreadcrumbDivider = styled.span`
    margin: 0px 5px;
`;
