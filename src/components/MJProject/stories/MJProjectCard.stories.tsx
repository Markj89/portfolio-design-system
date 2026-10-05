import type { Meta, StoryObj } from "@storybook/react";
import { MJProjectCard } from "../MJProjectCard";

const meta: Meta<typeof MJProjectCard> = {
	title: "Molecules/MJProject/MJProjectCard",
	component: MJProjectCard,
	parameters: {
		layout: "centered",
	},
	decorators: [
		(Story) => (
			<div style={{ width: "min(100%, 380px)" }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof MJProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "CTA Tracker App",
		description:
			"Real-time CTA train tracking web application with interactive maps, route filtering, and arrival predictions.",
		imageUrl:
			"https://images.unsplash.com/photo-1524666041070-9b876833efc2?auto=format&fit=crop&w=1200&q=85",
		imageAlt: "Map preview for the CTA Tracker App",
		projectUrl: "https://example.com/cta-tracker",
		repositoryUrl: "https://github.com/",
	},
};
