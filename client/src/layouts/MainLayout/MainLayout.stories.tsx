import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainLayoutContainer } from "./MainLayout.styles";

export default {
    title: "Layouts/MainLayoutContainer",
    component: MainLayoutContainer,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof MainLayoutContainer>;

const Template: ComponentStory<typeof MainLayoutContainer> = (args) => (
    <div
        style={{
            width: "100vw",
            minHeight: "100vh",
            height: "100%",
            padding: 0,
            margin: 0,
        }}
    >
        <MainLayoutContainer {...args}>
            <header style={{ background: "#eee", padding: 10 }}>header</header>
            <aside style={{ background: "#eee", padding: 10 }}>aside</aside>
            <main style={{ background: "#eee", padding: 10 }}>main</main>
        </MainLayoutContainer>
    </div>
);

export const Layout = Template.bind({});
Layout.args = {
    gap: 10
};
