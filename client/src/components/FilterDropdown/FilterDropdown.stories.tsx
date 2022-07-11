import { ComponentMeta, ComponentStory } from "@storybook/react";

import FilterDropdown from "./FilterDropdown";

export default {
    title: "Component/FilterDropdown",
    component: FilterDropdown,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof FilterDropdown>;

const Template: ComponentStory<typeof FilterDropdown> = (args) => (
    <FilterDropdown />
);

export const Default = Template.bind({});
Default.args = {};
