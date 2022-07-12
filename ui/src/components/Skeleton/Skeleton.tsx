import styled from "styled-components";

interface SkeletonProps {
    circle?: boolean;
    box?: boolean;
    height?: number;
    width?: number;
}

const Skeleton = styled.div<SkeletonProps>`
    background-color: ${({ theme: { colors } }) => colors.gray};
    width: ${({ width }) => (width ? `${width}px` : "100%")};
    height: ${({ height }) => (height ? `${height}px` : "16px")};
    border-radius: ${({ circle, box, theme: { borders } }) =>
        circle ? "50%" : box ? borders.rounded : "0.2rem"};

    background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 80%
        ),
        lightgray;
    background-repeat: repeat-y;
    background-size: 50px 200px;
    background-position: 0 0;
    animation: shine 1s infinite;

    @keyframes shine {
        to {
            background-position: 100% 0, 0 0;
        }
    }
`;

export default Skeleton;
