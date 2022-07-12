import { ComponentMeta, ComponentStory } from "@storybook/react";

import Bookmark from "./Bookmark";

export default {
    title: "Component/Bookmark",
    component: Bookmark,
} as ComponentMeta<typeof Bookmark>;

const Template: ComponentStory<typeof Bookmark> = (args) => (
    <Bookmark {...args} />
);

export const Default = Template.bind({});
Default.args = {
    isBookmark: false,
};
