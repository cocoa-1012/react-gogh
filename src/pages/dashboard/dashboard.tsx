import React from "react";
import MainLayout from "../../layouts/main/mainLayout";
import {
  Typography,
} from "@material-ui/core";
import useStyles from "./dashboard.style";

const DashBoard = () => {
  const classes = useStyles();
  return (
    <MainLayout currentRouter="Dashboard">
        <Typography variant="h1" className={classes.pageTitle}>
          Dashboard
        </Typography>
    </MainLayout>
  );
};

export default DashBoard;
