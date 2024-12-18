import type { Preview } from "@storybook/react";
import '../src/index.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: "dark", // Or set to "light", or a custom value
            values: [
                { name: "dark", value: "#333333" },
                { name: "light", value: "#ffffff" },
            ],
        },
    },
};

export default preview;
