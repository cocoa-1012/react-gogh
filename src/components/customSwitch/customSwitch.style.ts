import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor } from "../../constants/colors";

interface StyleProps {
    checked: boolean;
}

export default makeStyles((theme: Theme) => ({
    switchComponent: {
        width: 40, 
        height: 24,
        borderRadius: 40,
        backgroundColor: primaryColor,
        display: "flex",
        alignItems: "center",
        padding: "0 5px",
        cursor: "pointer",
    },
    switchBox: {
        width: 12,
        height: 12,
        borderRadius: "100%",
        backgroundColor: "white",
        transform: (props: StyleProps) => `translateX(${props.checked ? "16px" : "0"})`,
        transitionDuration: "0.3s",
    }
}));
