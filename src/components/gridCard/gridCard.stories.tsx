import type { Meta, StoryObj } from "@storybook/react";
import { GridCard } from "./gridCard";

const meta = {
  title: "Example/GridCard",
  component: GridCard,
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
  },
} satisfies Meta<typeof GridCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "GridCard Title",
    price: "Price",
    buttonText: "SendButton",
  },
};