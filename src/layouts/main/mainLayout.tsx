import { ReactElement } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import mainLayoutStyles from "./mainLayout.style";
import Header from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";

const useMainLayoutStyles = makeStyles(mainLayoutStyles);

interface MainLayoutProps {
  currentRouter: string;
  children: ReactElement;
}

const MainLayout = ({ currentRouter, children }: MainLayoutProps) => {
  const classes = useMainLayoutStyles();
  return (
    <Grid container direction="column" className={classes.mainLayoutContainer}>
        <>
          <Header />
          <SideBar currentRouter={currentRouter} />
          <Grid className={classes.mainSection}>{children}</Grid>
        </>
    </Grid>
  );
};

export default MainLayout;
