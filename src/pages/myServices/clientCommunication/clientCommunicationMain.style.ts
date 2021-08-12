import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    pageContainer: {
        padding: "50px 40px 30px 50px",
        maxHeight: "calc(100vh - 120px)",
        overflow: "hidden",
        "@media (max-width: 780px)": {
            padding: "20px 10px",
        },
    },
}));
