import { useState } from 'react';

import {
  Grid,
  Typography,
  Button,
  InputAdornment,
  Box,
  Modal,
  Backdrop,
  Fade,
  TextareaAutosize,
  MenuItem,
} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
import { ReactComponent as Dropdown } from '../../assets/images/dropdown.svg';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import useStyles from './AppointmentsModalReschedule.style';

interface IAppointemntsModal {
  openDialog: boolean;
  setOpenDialog: (arg: boolean) => void;
  eventDate?: string;
  customerFirstName?: string;
  customerLastName?: string;
  serviceName?: string;
}

const AppointmentsModalReschedule: React.FC<IAppointemntsModal> = ({
  openDialog,
  setOpenDialog,
  customerFirstName,
  customerLastName,
  serviceName,
  eventDate,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleClose = () => {
    setOpenDialog(!openDialog);
  };
  //date
  const handleDateChange = (date: Date): void => {
    setSelectedDate(date);
  };

  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openDialog}
        onClose={handleClose}
        closeAfterTransition
        disableBackdropClick
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openDialog}>
          <div className={classes.paper}>
            <Grid container style={{ height: '100%' }}>
              <Grid
                item
                container
                alignContent="center"
                justify="flex-end"
                style={{ height: '40px', paddingTop: 20, paddingRight: 20 }}
              >
                <CancelIcon
                  onClick={handleClose}
                  style={{
                    width: '30px',
                    height: '30px',
                    fill: '#f6f6fb',
                    cursor: 'pointer',
                    stroke: 'black',
                  }}
                />
              </Grid>

              <Grid item className={classes.titleContainer}>
                <Typography className={classes.titleModal} variant="h4">
                  Reschedule a session
                </Typography>
              </Grid>
              <Grid style={{ paddingLeft: 60, marginBottom: 20 }}>
                <Box>
                  <Typography variant="body1">
                    {`You are rescheduling a session for ${customerFirstName} ${customerLastName},`}
                  </Typography>
                </Box>
                <Box>
                  <Typography>{`for the following contract ${serviceName}`}</Typography>
                </Box>
              </Grid>
              <Grid item style={{ paddingLeft: 60, marginBottom: 40 }}>
                <Box>
                  <Typography>{`Original date: date`}</Typography>
                </Box>
              </Grid>
              <Grid item className={classes.inputsItems}>
                <Typography className={classes.inputsTitle}>
                  New date
                </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    className={classes.customerDatePicker}
                    fullWidth
                    variant="inline"
                    format="yyyy/mm/dd"
                    margin="normal"
                    id="date-picker-inline"
                    placeholder="Chose a date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    onFocus=""
                    onBlur=""
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    keyboardIcon={<Dropdown />}
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item className={classes.textArea}>
                <Typography className={classes.inputsTitle}>
                  Reason for rescheaduling
                </Typography>
                <TextareaAutosize
                  style={{
                    height: 160,
                    width: '100%',
                    resize: 'none',
                    borderRadius: '10px',
                    border: ' solid 2px #e4e6f2',
                    // marginBottom: 40,
                  }}
                  aria-label="Reason for rescheaduling"
                  placeholder="Reason for rescheaduling"
                />
              </Grid>
              <Grid
                item
                style={{
                  margin: '40px 0',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Button className={classes.button}>
                  <Typography
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      textTransform: 'none',
                    }}
                    variant="button"
                  >
                    Confirm
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AppointmentsModalReschedule;
