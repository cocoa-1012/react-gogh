import { useState } from 'react';

import {
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Box,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import useStyles from './AppointmentsModalSchedule.style';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CancelIcon from '@material-ui/icons/Cancel';
import { ReactComponent as Dropdown } from '../../assets/images/dropdown.svg';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface IAppointemntsModal {
  openDialog: boolean;
  setOpenDialog: (arg: boolean) => void;
  newSesion?: boolean;
  eventDate?: string;
  customerFirstName?: string;
  customerLastName?: string;
  serviceName?: string;
}

const AppointmentsModalSchedule: React.FC<IAppointemntsModal> = ({
  openDialog,
  setOpenDialog,
  newSesion,
  customerFirstName,
  customerLastName,
  serviceName,
  eventDate,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dropdown, setDropdown] = useState('proba');

  //address
  const [address, setAddress] = useState<string[]>([]);
  const [contract, setContract] = useState<string[]>([]);
  const classes = useStyles();

  console.log(newSesion, 'ovo je SESIJA');

  //MODAL

  const handleClose = () => {
    setOpenDialog(false);
  };
  //date
  const handleDateChange = (date: Date): void => {
    setSelectedDate(date);
  };

  const handleAddress = () => {
    console.log('address');
  };

  const handleContract = () => {
    console.log('contract');
  };

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
            <Grid container direction="column">
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
                  Schedule a session
                </Typography>
              </Grid>

              <Grid item className={classes.inputsItems}>
                <Typography className={classes.inputsTitle}>
                  Customers name
                </Typography>
                <TextField
                  placeholder="Type customers name"
                  className={classes.customerTextField}
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item className={classes.inputsItems}>
                <Typography className={classes.inputsTitle}>Address</Typography>

                <TextField
                  fullWidth
                  select
                  value={address}
                  onChange={handleAddress}
                  className={classes.customerSelectField}
                  SelectProps={{
                    native: true,
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                >
                  {/* address.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        )) */}
                  <option value="">Address</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </TextField>
              </Grid>
              <Grid item className={classes.inputsItems}>
                <Typography className={classes.inputsTitle}>Date</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    className={classes.customerDatePicker}
                    fullWidth
                    variant="inline"
                    format="yyyy/mm/dd"
                    margin="normal"
                    id="date-picker-inline"
                    placeholder="Chose date range"
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
              <Grid item className={classes.inputsItems}>
                <Typography className={classes.inputsTitle}>
                  Contract
                </Typography>
                <TextField
                  fullWidth
                  select
                  value={contract}
                  onChange={handleContract}
                  className={classes.customerSelectField}
                  SelectProps={{
                    native: true,
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <InsertDriveFileIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                >
                  {/* address.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        )) */}
                  <option value="">Chose a contract</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </TextField>
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

export default AppointmentsModalSchedule;
