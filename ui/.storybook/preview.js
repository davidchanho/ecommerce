import { withThemes } from "@react-theming/storybook-addon";
import { theme } from "../src/theme";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withThemes(ThemeProvider, [theme]));
