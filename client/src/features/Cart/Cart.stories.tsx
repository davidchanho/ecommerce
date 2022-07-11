import { ComponentMeta, ComponentStory } from "@storybook/react";

import Cart from "./Cart";

export default {
    title: "Feature/Cart",
    component: Cart,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart />;

export const Default = Template.bind({});
Default.args = {
    primary: true,
};
