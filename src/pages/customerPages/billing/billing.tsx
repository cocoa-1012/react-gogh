import React from "react";
import MainLayout from "../../../layouts/main/mainLayout";
import { Typography } from "@material-ui/core";
import useStyles from "./billing.style";

const CustomerBillingPage = () => {
  const classes = useStyles();
  return (
    <MainLayout currentRouter="Billing & Transactions">
      <Typography variant="h1" className={classes.pageTitle}>
        Billing
      </Typography>
    </MainLayout>
  );
};

export default CustomerBillingPage;
