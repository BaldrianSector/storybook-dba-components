import type { Meta, StoryObj } from "@storybook/react";
import { ListCard } from "./listCard";

const meta = {
    title: "Example/ListCard",
    component: ListCard,
    tags: ["docsPage"],
    argTypes: {
        title: {
            control: { type: "text" },
        },
        price: {
            control: { type: "text" },
        },
        buttonText: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
        linkText: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "ListCard Title",
        price: "Price",
        buttonText: "SendButton",
        description: "This is a description for the ListCard.",
        linkText: "Learn more",
    },
};
