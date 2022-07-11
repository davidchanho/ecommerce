import { Img } from "./Carousel.stories";

export interface CarouselProps {
    data: Img[];
    loading: boolean;
    active: number;
    setActive: (idx: number) => void;
}
