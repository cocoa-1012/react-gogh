import { ReactElement } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import authLayoutStyles from './authLayout.style';

const useAuthLayoutStyles = makeStyles(authLayoutStyles);

interface AuthLayoutProps {
  children: ReactElement;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const classes = useAuthLayoutStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      className={classes.authContainer}
    >
      {children}
    </Grid>
  );
};

export default AuthLayout;
