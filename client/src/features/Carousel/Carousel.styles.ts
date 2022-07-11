import styled from "styled-components";

export const CarouselContainer = styled.section`
    display: flex;
    gap: 10px;
`;

export const CarouselThumbnails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const CarouselThumbnail = styled.img`
    cursor: pointer;
    border-radius: ${({ theme: { borders } }) => borders.rounded};
`;

export const CarouselSlide = styled.div`
    width: 960px;
    height: auto;
    img {
        border-radius: ${({ theme: { borders } }) => borders.rounded};
    }
`;
