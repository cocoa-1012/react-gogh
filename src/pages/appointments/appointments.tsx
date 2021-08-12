import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Box,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
//components
import AppointmentsTable from '../../components/appointmentsTable/AppointmentsTable';
import AppointmentsModalSchedule from '../../components/appointmentsModalSchedule/AppointmentsModalSchedule';

import { ReactComponent as SettingsIcon } from '../../assets/images/settings.svg';
import { ReactComponent as Dropdown } from '../../assets/images/dropdown.svg';
import MainLayout from '../../layouts/main/mainLayout';
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListIcon from '@material-ui/icons/List';

import useStyles from './appointments.style';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch({
      type: 'GET_APPOINTMENTS',
      // payLoad: { name: '', pageNumber: 1, pageSize: 1, date: '' },
    });
  }, [dispatch]);

  const handleButton = () => {
    console.log('usao u BUTTON');

    setOpenDialog(!openDialog);
  };

  const handleDateChange = (date: Date): void => {
    setSelectedDate(date);
  };

  const handleOnFocus = () => {
    console.log('handleOnFocus');
  };

  const handleOnBlur = () => {
    console.log('handleOnBlur');
  };

  return (
    <MainLayout currentRouter="Appointments">
      <Grid className={classes.pageContainer}>
        <Typography variant="h1" className={classes.pageTitle}>
          Upcoming Appointments
        </Typography>

        <Grid container direction="row" xs={12}>
          <Grid
            item
            container
            direction="row"
            xs={12}
            md={6}
            className={classes.subContainer}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/mm/dd"
                margin="normal"
                id="date-picker-inline"
                placeholder="Chose date range"
                value={selectedDate}
                onChange={handleDateChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                className={classes.dataPicker}
                keyboardIcon={<Dropdown />}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon style={{ color: '#2255ff' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              className={classes.search}
              placeholder="Search by customer name"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: '#2255ff' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid
            container
            direction="row"
            xs={12}
            md={6}
            alignItems="center"
            justify="flex-end"
            className={classes.buttonsView}
          >
            <Typography variant="body1" className={classes.view}>
              View:
            </Typography>
            <Box className={classes.boxViewLeft}>
              <CalendarTodayIcon />
            </Box>
            <Box className={classes.boxViewRight}>
              <ListIcon />
            </Box>

            <Button onClick={handleButton} className={classes.sheduleButton}>
              <Typography variant="body1">Schedule a sesion</Typography>
            </Button>
            <Box className={classes.boxSettings}>
              <SettingsIcon stroke="black" />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h4" className={classes.dayTitle}>
          Today
        </Typography>
        <AppointmentsTable />
        {openDialog && (
          <AppointmentsModalSchedule
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        )}
      </Grid>
    </MainLayout>
  );
};

export default Appointments;
