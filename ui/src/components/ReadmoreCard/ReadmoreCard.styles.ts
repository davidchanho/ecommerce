import styled, { css } from "styled-components";
import Card from "../Card/Card";
import { ReadmoreCardProps } from "./ReadmoreCard.types";

const visableStyles = css`
    overflow-y: visible;
`;

const hiddenStyles = css`
    overflow-y: hidden;
    display: --webkit-box;
    --webkit-line-clamp: 5;
    --webkit-box-orient: vertical;
`;

export const ReadmoreCardStyles = styled(Card)<ReadmoreCardProps>`
    .description {
        overflow-y: ${({hidden}) => hidden ? 'hidden' : 'visible'};
        display: ${({hidden}) => hidden ? '' : '--webkit-box'};
    }

    .btn {
        width: 100%;
        display: flex;
        flex-direction: row;
        text-align: center;
        cursor: pointer;
    }

    .divider {
        width: 40%;
    }
`;
