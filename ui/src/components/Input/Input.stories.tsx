import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "../Button/Button";
import { Form, FormControl, Input, Label } from "./Input";

export default {
    title: "Component/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <Form onSubmit={(e) => e.preventDefault()}>
        <FormControl>
            <Label>Email</Label>
            <Input {...args} type="email" value="jdoe@email.com" />
        </FormControl>
        <FormControl>
            <Label>Password</Label>
            <Input {...args} type="password" value="password" />
        </FormControl>
        <Button>Submit</Button>
    </Form>
);

export const Default = Template.bind({});
Default.args = {};
