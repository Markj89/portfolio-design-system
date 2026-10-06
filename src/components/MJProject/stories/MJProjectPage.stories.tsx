import type { Meta, StoryObj } from "@storybook/react";
import { MJProjectPage } from "../MJProjectPage";

const meta: Meta<typeof MJProjectPage> = {
  title: "Templates/MJProject/MJProjectPage",
  component: MJProjectPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MJProjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      title: "CTA Tracker App",
      description:
        "A real-time transit tracker with interactive maps, route filtering, and arrival predictions.",
      imageUrl:
        "https://images.unsplash.com/photo-1524666041070-9b876833efc2?auto=format&fit=crop&w=1600&q=85",
      imageAlt: "Map preview for the CTA Tracker App",
      role: "Product design and development",
      year: "2026",
      technologies: ["Next.js", "TypeScript", "Maps"],
      sections: [
        {
          heading: "Overview",
          body: "The CTA Tracker brings route planning and live arrival information into a single focused experience.",
        },
        {
          heading: "Challenge",
          body: "Transit information is spread across multiple views. This project makes routes, service status, and nearby arrivals easier to scan together.",
        },
      ],
      projectUrl: "https://example.com/cta-tracker",
      repositoryUrl: "https://github.com/",
    },
  },
};