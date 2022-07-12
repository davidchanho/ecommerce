import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";

export default {
    title: "Component/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {
    size: "large",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
};

const Template2: ComponentStory<typeof Button> = (args) => (
    <Button {...args} icon>
        +
    </Button>
);
export const Icon = Template2.bind({});
Icon.args = {
    icon: true,
};
