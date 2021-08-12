import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./customSwitch.style";

interface CustomSwitchProps {
    checked: boolean;
    toggle: (check: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ checked, toggle }) => {
    const classes = useStyles({ checked });
    return (
        <Box className={classes.switchComponent} onClick={() => toggle(!checked)}>
            <Box className={classes.switchBox}></Box>
        </Box>
    )
}

export default CustomSwitch;
