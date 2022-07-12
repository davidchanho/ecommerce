import { ComponentMeta, ComponentStory } from "@storybook/react";

import FilterDropdown from "./FilterDropdown";

export default {
    title: "Component/FilterDropdown",
    component: FilterDropdown,
} as ComponentMeta<typeof FilterDropdown>;

const Template: ComponentStory<typeof FilterDropdown> = () => {
    const options: string[] = ["Apple", "Oranges", "Banana"];

    return <FilterDropdown options={options} />;
};

export const Default = Template.bind({});
