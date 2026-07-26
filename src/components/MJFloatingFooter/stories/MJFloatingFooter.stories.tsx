import type { Meta, StoryObj } from "@storybook/react";
import MJFloatingFooter from "../MJFloatingFooter";

const meta: Meta<typeof MJFloatingFooter> = {
  title: "Organisms/MJFloatingFooter/Overview",
  component: MJFloatingFooter,
} satisfies Meta<typeof MJFloatingFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ flex: 1, marginLeft: "550px" }}>
        <Story />
      </div>
    ),
  ],
};
