import React from "react";
import MainLayout from "../../layouts/main/mainLayout";
import { Typography } from "@material-ui/core";
import useStyles from "./reports.style";

const Reports = () => {
  const classes = useStyles();
  return (
    <MainLayout currentRouter="Reports & Transactions">
      <Typography variant="h1" className={classes.pageTitle}>
        Reports
      </Typography>
    </MainLayout>
  );
};

export default Reports;
