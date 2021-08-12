import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./login.style";
import GoghLogo from "../../../assets/images/gogh-logo.png";
import MacBookImage from "../../../assets/images/login/macbook.png";

const LogoSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.logoSectionContainer}>
      <Grid className={classes.logoImageWrapper}>
        <img src={GoghLogo} alt="logo" />
        <Typography variant="body1" className={classes.loginLogoText}>Gogh</Typography>
      </Grid>
      <img
        src={MacBookImage}
        alt="macbook"
        className={classes.macbookImage}
      />
      <Typography variant="h2" className={classes.logoSectionTextTitle}>
        Lorem ipsum is dummy text
      </Typography>
      <Typography variant="body1" className={classes.logoSectionTextDescription}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Typography>
      <Grid className={classes.sliderNavigationDotWrapper}>
        <Typography variant="body1"
          className={`${classes.sliderNavigation} ${classes.sliderNavigationActive}`}
        ></Typography>
        <Typography variant="body1" className={classes.sliderNavigation}></Typography>
        <Typography variant="body1" className={classes.sliderNavigation}></Typography>
      </Grid>
    </Container>
  );
};

export default LogoSection;
