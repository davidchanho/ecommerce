import { ComponentMeta, ComponentStory } from "@storybook/react";

import ReadmoreCard from "./ReadmoreCard";

export default {
    title: "Component/ReadmoreCard",
    component: ReadmoreCard,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof ReadmoreCard>;

const Template: ComponentStory<typeof ReadmoreCard> = () => <ReadmoreCard />;

export const Default = Template.bind({});
Default.args = {
    hidden: false,
};
