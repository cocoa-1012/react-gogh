import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./customTextField.style";
import { CustomTextFieldProps } from "./interfaces";

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  value,
  setValue,
  type,
  required,
  name,
  onKeyDown,
  defaultValue
}) => {
  const [labelFloat, setLabelFloat] = useState<string>("");
  const [borderColor, setBorderColor] = useState<string>("#E4E6F2");
  useEffect(() => {
    if (value !== "") setLabelFloat("translate(0, -12px) scale(0.75)");
  });
  const classes = useStyles({ labelFloat, borderColor });
  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.floatingLabelInput}
    >
      <input
        type={type}
        className={classes.floatingInput}
        value={value}
        name={name}
        onChange={setValue}
        defaultValue={defaultValue}
        onFocus={() => {
          setLabelFloat("translate(0, -12px) scale(0.75)");
          setBorderColor("#B7BBD8");
        }}
        onBlur={() => {
          setLabelFloat("");
          setBorderColor("#E4E6F2");
        }}
        onKeyDown={onKeyDown}
        required={required}
      />

      <Typography variant="body1" className={classes.floatingLabel}>
        {label}
      </Typography>
    </Grid>
  );
};

export default CustomTextField;
