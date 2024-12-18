import type { Meta, StoryObj } from "@storybook/react";
import { ListMolecule } from "./listMolecule";

const meta = {
    title: "Example/ListMolecule",
    component: ListMolecule,
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
} satisfies Meta<typeof ListMolecule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "ListMolecule Title",
        items: [
            { title: "Item 1", description: "description", price: "Price 1", buttonText: "Button 1", linkText: "Link text"},
            { title: "Item 2", description: "description", price: "Price 2", buttonText: "Button 2", linkText: "Link text"},
            { title: "Item 3", description: "description", price: "Price 3", buttonText: "Button 3", linkText: "Link text"},
            { title: "Item 4", description: "description", price: "Price 4", buttonText: "Button 4", linkText: "Link text"},
        ],
        description: "This is a description text.",
        tags: ["Link extra small 1", "Link extra small 2", "Link extra small 3"],
    },
};
