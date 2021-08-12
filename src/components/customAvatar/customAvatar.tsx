import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./customAvatar.style";
import { stringToColor } from "../../shared/hooks";

interface CustomAvatarProps {
  avatarImage?: string;
  size?: number;
  firstName?: string;
  lastName?: string;
  fontSize?: number;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  avatarImage,
  size, 
  firstName, 
  lastName,
  fontSize
}) => {
    const randomAvatarBg: string = firstName ? stringToColor(firstName) : lastName ? stringToColor(lastName) : "transparent";
  const classes = useStyles({ avatarImage, size, randomAvatarBg, fontSize });
  return (
    <Box className={classes.avatarWrapper}>
      <Box className={classes.avatarImage}>
          <Typography variant="body1" className={classes.avatarText}>{avatarImage ? "" : firstName ? firstName[0] : ""}</Typography>
          <Typography variant="body1" className={classes.avatarText}>{avatarImage ? "" : lastName ? lastName[0] : ""}</Typography>
      </Box>
    </Box>
  );
};

export default CustomAvatar;
