import { ComponentMeta, ComponentStory } from "@storybook/react";

import Breadcrumbs from "./Breadcrumbs";

export default {
    title: "Component/Breadcrumbs",
    component: Breadcrumbs,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
    <Breadcrumbs {...args} />
);

export const Default = Template.bind({});
Default.args = {
    pathname: "/clothes/t-shirt",
};
