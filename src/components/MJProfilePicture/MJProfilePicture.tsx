import React from "react";
import { MJProfilePictureProps } from "./MJProfilePicture.types";
import clsx from "clsx";
import "./MJProfilePicture.scss";

export const MJProfilePicture: React.FC<MJProfilePictureProps> = ({ alt, href="", ariaLabel = "Profile Picture", className, src= "https://placehold.co/400x200" }) => {
    const imageStyle: React.CSSProperties = {
        width: "100% !important",
        height: "100% !important",
        objectFit: "cover",
        display: "block"
  };
    return (
        <div className={clsx("MJProfilePicture")} aria-label={ariaLabel}>
            <div className={clsx("MJProfilePicture__container")}>
                {
                    href ? (
                        <a href={href}>
                            <div className={clsx("MuiSkeleton__rounded-halo")}>
                                <div className={clsx("MuiSkeleton__rounded")}>
                                    <img src={src} aria-label={alt} alt={alt} style={imageStyle} className={clsx("mj-profile-picture__image", className)} />
                                </div>
                            </div>
                        </a>
                    ) : (
                        <div className={clsx("MuiSkeleton__rounded-halo")}>
                            <div className={clsx("MuiSkeleton__rounded")}>
                                <img src={src} aria-label={alt} alt={alt} style={imageStyle} className={clsx("mj-profile-picture__image", className)} />
                            </div>
                        </div>
                    )
                }
            </div>
            
        </div>

    );
}

MJProfilePicture.displayName = "MJProfilePicture";
export default MJProfilePicture;