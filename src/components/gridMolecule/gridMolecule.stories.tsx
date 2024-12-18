import type { Meta, StoryObj } from "@storybook/react";
import { GridMolecule } from "./gridMolecule";

const meta = {
    title: "Example/GridMolecule",
    component: GridMolecule,
    tags: ["docsPage"],
    argTypes: {
        title: {
            control: { type: "text" },
        },
        items: {
            control: { type: "object" },
        },
        description: {
            control: { type: "text" },
        },
        tags: {
            control: { type: "object" },
        },
    },
} satisfies Meta<typeof GridMolecule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "GridMolecule Title",
        items: [
            { title: "Item 1", price: "Price 1", buttonText: "Button 1" },
            { title: "Item 2", price: "Price 2", buttonText: "Button 2" },
            { title: "Item 3", price: "Price 3", buttonText: "Button 3" },
            { title: "Item 4", price: "Price 4", buttonText: "Button 4" },
        ],
        description: "This is a description text.",
        tags: ["Link extra small 1", "Link extra small 2", "Link extra small 3"],
    },
};
