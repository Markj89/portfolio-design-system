"use client";

import React from "react";
import { Box, Card, CardActions, CardContent, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MJButton from "../../MJButton/MJButton";
import MJIcon from "../../MJIcons/MJIcons";
import MJTypography from "../../MJTypography/MJTypography";
import type { MJProjectCardProps } from "../MJProject.types";

export const MJProjectCard: React.FC<MJProjectCardProps> = ({
	title,
	description,
	imageUrl,
	imageAlt,
	projectUrl,
	repositoryUrl,
}) => {
	const theme = useTheme();
	const styles = theme.custom.mjProjectCard;

	return (
			<Card elevation={0} sx={styles.root(theme)}>
				<Box
					component="img"
					src={imageUrl}
					alt={imageAlt || title}
					loading="lazy"
					decoding="async"
					sx={styles.image(theme)}
				/>
				<CardContent sx={styles.content(theme)}>
					<MJTypography
						variant="h5"
						tag="h2"
						color="black"
						fontWeight="Bold"
					>
						{title}
					</MJTypography>
					<MJTypography
						variant="body2"
						tag="p"
						color="black"
						fontWeight="Regular"
					>
						{description}
					</MJTypography>
				</CardContent>
				<CardActions sx={styles.actions(theme)}>
					{repositoryUrl ? (
						<IconButton
							component="a"
							href={repositoryUrl}
							target="_blank"
							rel="noreferrer"
							aria-label={`${title} source code`}
							size="large"
							sx={styles.repositoryLink(theme)}
						>
							<MJIcon iconName="GitHub" />
						</IconButton>
					) : (
						<Box />
					)}
					{projectUrl ? (
						<MJButton
							variant="outlined"
							color="primary"
							disabled={false}
							onClick={() => window.open(projectUrl, "_blank", "noopener,noreferrer")}
							className="MJProjectCard__projectLink"
						>
							View Project <MJIcon iconName="ArrowForward" className="MJProjectCard__arrow" />
						</MJButton>
					) : null}
				</CardActions>
			</Card>
	);
};

MJProjectCard.displayName = "MJProjectCard";

export default MJProjectCard;
