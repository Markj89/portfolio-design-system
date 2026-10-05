"use client";

import React from "react";
import { Box, Chip, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MJButton from "../../MJButton/MJButton";
import MJIcon from "../../MJIcons/MJIcons";
import MJTypography from "../../MJTypography/MJTypography";
import type { MJProjectPageProps } from "../MJProject.types";

export const MJProjectPage: React.FC<MJProjectPageProps> = ({ project }) => {
	const theme = useTheme();
	const styles = theme.custom.mjProjectPage;

	return (
		<Box component="main" sx={styles.page}>
			<Box component="header" sx={styles.header(theme)}>
				<MJTypography
					variant="h1"
					tag="h1"
					color="black"
					fontWeight="Bold"
				>
					{project.title}
				</MJTypography>
				<MJTypography
					variant="h6"
					tag="p"
					color="black"
					fontWeight="Regular"
				>
					{project.description}
				</MJTypography>
				{project.role || project.year ? (
					<Stack direction="row" sx={styles.metadata(theme)}>
						{project.role ? <span>{project.role}</span> : null}
						{project.role && project.year ? <span aria-hidden="true">|</span> : null}
						{project.year ? <span>{project.year}</span> : null}
					</Stack>
				) : null}
			</Box>

			<Box
				component="img"
				src={project.imageUrl}
				alt={project.imageAlt || project.title}
				loading="eager"
				fetchPriority="high"
				sx={styles.heroImage(theme)}
			/>

			{project.technologies?.length ? (
				<Box component="section" aria-label="Technologies" sx={styles.technologies}>
					{project.technologies.map((technology) => (
						<Chip key={technology} label={technology} variant="outlined" />
					))}
				</Box>
			) : null}

			{project.sections?.map((section) => (
				<Box component="section" key={section.heading} sx={styles.section(theme)}>
					<MJTypography
						variant="h4"
						tag="h2"
						color="black"
						fontWeight="Bold"
					>
						{section.heading}
					</MJTypography>
					<MJTypography
						variant="body1"
						tag="p"
						color="black"
						fontWeight="Regular"
					>
						{section.body}
					</MJTypography>
				</Box>
			))}

			{project.projectUrl || project.repositoryUrl ? (
				<Stack component="nav" aria-label="Project links" direction="row" sx={styles.actions(theme)}>
					{project.repositoryUrl ? (
						<IconButton
							component="a"
							href={project.repositoryUrl}
							target="_blank"
							rel="noreferrer"
							aria-label={`${project.title} source code`}
							size="large"
						>
							<MJIcon iconName="GitHub" />
						</IconButton>
					) : null}
					{project.projectUrl ? (
						<MJButton
							variant="outlined"
							color="primary"
							disabled={false}
							onClick={() => window.open(project.projectUrl, "_blank", "noopener,noreferrer")}
						>
							Visit Project <MJIcon iconName="ArrowForward" className="MJProjectPage__arrow" />
						</MJButton>
					) : null}
				</Stack>
			) : null}
		</Box>
	);
};

MJProjectPage.displayName = "MJProjectPage";

export default MJProjectPage;
