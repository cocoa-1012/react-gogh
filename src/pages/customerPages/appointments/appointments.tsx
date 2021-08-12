import MainLayout from '../../../layouts/main/mainLayout';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import useStyles from './appointments.style';

const CustomerAppointmentsPage = () => {
  const classes = useStyles();
  return (
    <MainLayout currentRouter="CustomerAppointments">
      <Grid className={classes.pageContainer}>
        <Typography variant="h1" className={classes.pageTitle}>
          Upcoming Appointments
        </Typography>
      </Grid>
    </MainLayout>
  );
};
export default CustomerAppointmentsPage;
