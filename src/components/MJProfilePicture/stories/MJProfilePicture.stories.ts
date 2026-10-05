import type { Meta, StoryObj } from "@storybook/react";
import MJProfilePicture from "../MJProfilePicture";

export default {
  title: "Atoms/MJProfilePicture/MJProfilePicture",
  component: MJProfilePicture,
  parameters: {
    layout: "fullscreen",
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
} as Meta<typeof MJProfilePicture>;
type Story = StoryObj<typeof MJProfilePicture>;

export const ProfilePicture: Story = {};
