import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import useStyles from "./customCheckbox.style";
import CheckMark from "../../assets/images/login/checkmark.svg";
import { CustomCheckboxProps } from "./interfaces";

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, label, children, color }) => {
  const classes = useStyles({ color });
  return (
    <Grid className={classes.checkboxContainer}>
      <Box
        className={classes.checkbox}
        onClick={() => { onChange && onChange(!checked)}}
        style={{ backgroundColor: checked ? (color && color === "primary" ? "#2255ff" : "#7580bd") : "" }}
      >
        {checked && <img src={CheckMark} alt="checkmark" />}
      </Box>
      {label && <Typography variant="body1" className={classes.checkboxLabel}>{label}</Typography>}
      {children}
    </Grid>
  );
};

export default CustomCheckbox;
