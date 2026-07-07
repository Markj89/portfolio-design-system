import type { Meta, StoryObj } from "@storybook/react";
import { MJInput } from "../MJInput";

const meta: Meta<typeof MJInput> = {
  title: "Atoms/MJInput/Overview",
  component: MJInput,
  argTypes: {},
} satisfies Meta<typeof MJInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldOutlined: Story = {
  args: {
    variant: "outlined",
    placeholder: "Type here",
    label: "Name",
  },
};

export const TextFieldOutlinedError: Story = {
  args: {
    variant: "outlined",
    error: true,
  },
};

export const TextFieldStandard: Story = {
  args: {
    variant: "standard",
  },
};
