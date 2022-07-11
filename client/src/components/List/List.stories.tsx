import { ComponentMeta, ComponentStory } from "@storybook/react";

import { List, ListItem } from "./List";

export default {
    title: "Component/List",
    component: List,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onClick: { action: true },
    },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
    <List {...args}>
        <ListItem active>Banana</ListItem>
        <ListItem>Apple</ListItem>
        <ListItem>Oranges</ListItem>
    </List>
);

export const Default = Template.bind({});
Default.args = {};
