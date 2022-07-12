import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loader from "./Loader";

export default {
    title: "Component/Loader",
    component: Loader,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
    <Loader {...args}>Submit</Loader>
);

export const Default = Template.bind({});
Default.args = {
    size: 24,
};
