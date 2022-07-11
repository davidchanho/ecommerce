import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { useAsync } from "../../hooks/useAsync";

import Carousel from "./Carousel";

export default {
    title: "Feature/Carousel",
    component: Carousel,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Carousel>;

export interface Img {
    src: string;
    alt: string;
    thumbnail: string;
    thumbnailAlt: string;
}

const img: Img[] = [
    {
        src: "https://picsum.photos/id/230/640/480",
        alt: "",
        thumbnail: "https://picsum.photos/id/230/140/140",
        thumbnailAlt: "",
    },
    {
        src: "https://picsum.photos/id/233/640/480",
        alt: "",
        thumbnail: "https://picsum.photos/id/233/140/140",
        thumbnailAlt: "",
    },
    {
        src: "https://picsum.photos/id/235/640/480",
        alt: "",
        thumbnail: "https://picsum.photos/id/235/140/140",
        thumbnailAlt: "",
    },
    {
        src: "https://picsum.photos/id/236/640/480",
        alt: "",
        thumbnail: "https://picsum.photos/id/236/140/140",
        thumbnailAlt: "",
    },
];

const Template: ComponentStory<typeof Carousel> = (args) => {
    const [active, setActive] = useState(0);
    const { data, loading } = useAsync(img);

    return (
        <Carousel
            data={data}
            loading={loading}
            active={active}
            setActive={setActive}
        />
    );
};

export const Default = Template.bind({});
