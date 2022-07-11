import Skeleton from "../../components/Skeleton/Skeleton";
import {
    CarouselContainer,
    CarouselSlide,
    CarouselThumbnail,
    CarouselThumbnails,
} from "./Carousel.styles";
import { CarouselProps } from "./Carousel.types";

function Carousel({ data, loading, active, setActive }: CarouselProps) {
    return (
        <CarouselContainer>
            {loading ? (
                <>
                    <CarouselThumbnails>
                        <Skeleton box width={140} height={140} />
                        <Skeleton box width={140} height={140} />
                        <Skeleton box width={140} height={140} />
                        <Skeleton box width={140} height={140} />
                    </CarouselThumbnails>
                    <CarouselSlide>
                        <Skeleton box width={640} height={140 * 4 + 30} />
                    </CarouselSlide>
                </>
            ) : (
                <>
                    <CarouselThumbnails>
                        {data.map((img, idx) => {
                            return (
                                <CarouselThumbnail
                                    src={img.thumbnail}
                                    alt={img.thumbnailAlt}
                                    onClick={() =>
                                        idx !== active && setActive(idx)
                                    }
                                    width={140}
                                    height={140}
                                />
                            );
                        })}
                    </CarouselThumbnails>
                    <CarouselSlide>
                        <img
                            src={data[active].src}
                            alt={data[active].alt}
                            width={640}
                            height={140 * 4 + 30}
                        />
                    </CarouselSlide>
                </>
            )}
        </CarouselContainer>
    );
}

export default Carousel;
