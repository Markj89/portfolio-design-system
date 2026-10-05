import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentProps } from "react";
import { MJModal } from "../MJModal";
import MJButton from "../../MJButton/MJButton";
import { MJModalHead } from "../MJModalHead/MJModalHead";
import { MJModalHeader } from "../MJModalHeader/MJModalHeader";
import { MJModalContent } from "../MJModalContent/MJModalContent";
import MJTypography from "../../MJTypography/MJTypography";
import { MJModalOverlay } from "../MJModalOverlay/MJModalOverlay";


const meta: Meta<typeof MJModal> = {
  title: "Molecules/MJModal/Overview",
  component: MJModal,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MJModal>;

export default meta;

type Story = StoryObj<typeof meta>;
type MJModalStoryArgs = Omit<ComponentProps<typeof MJModal>, "aria-label" | "aria-labelledby">;

function MJModalStory(args: MJModalStoryArgs) {
  const [open, setOpen] = useState<boolean>(true);

  function closeHandler() {
    setOpen(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
      }}
    >
      <MJButton color={"primary"} variant={"contained"} onClick={() => setOpen(true)}>
        Open modal
      </MJButton>
      <MJModal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="mj-modal-title"
        aria-describedby="mj-modal-description"
      >
        <MJModalOverlay overlay>
          <MJModalHead onRequestClose={closeHandler}>
            <MJModalHeader color="black" variant="h6" id="mj-modal-title">
              Default Title
            </MJModalHeader>
          </MJModalHead>
          <MJModalContent>
            <MJTypography id="mj-modal-title" tag={"h2"} color="black" fontWeight={"Bold"} variant={"h2"} style={{ marginTop: 0 }}>
              MJModal
            </MJTypography>
            <p id="mj-modal-description" style={{ marginBottom: "16px" }}>
              This is a simple example of the design system modal component.
            </p>
          </MJModalContent>
        </MJModalOverlay>
      </MJModal>
    </div>
  );
}

export const Default: Story = {
  render: (args) => <MJModalStory {...args} />,
};
