import { useSelector } from 'react-redux';

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import useStyles from './AppointmentsTable.style';
import AppointmentsListRow from './appointmentsListRow/AppointmentsListRow';
import ReactLoading from 'react-loading';
import { AppointmentsRequestModel } from '../../interfaces/appointments';

import CustomCheckbox from '../customCheckbox/customCheckbox';

const AppointmentsTable: React.FC = () => {
  const appointmentsState: any = useSelector(
    (state: any) => state.appointments.appointmentsData
  );

  const classes = useStyles();

  const shouldRenderLoader = appointmentsState.length <= 0;

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <CustomCheckbox checked={false} color="secondary" />
            </TableCell>
            <TableCell className={classes.tableHeadText} align="left">
              CUSTOMER NAME
            </TableCell>
            <TableCell className={classes.tableHeadText} align="left">
              ADDRESS
            </TableCell>
            <TableCell
              className={classes.tableHeadText}
              align="left"
            ></TableCell>
            <TableCell className={classes.tableHeadText} align="left">
              SERVICE SCHEDULED
            </TableCell>
            <TableCell className={classes.tableHeadText} align="left">
              STATUS
            </TableCell>
            <TableCell className={classes.tableHeadText} align="left">
              DELIVERED BY
            </TableCell>
            <TableCell className={classes.tableHeadText} align="left">
              ACTIONS
            </TableCell>
            <TableCell
              className={classes.tableHeadText}
              align="left"
            ></TableCell>
            <TableCell
              className={classes.tableHeadText}
              align="left"
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointmentsState &&
            appointmentsState.map(
              (
                {
                  customerAddress,
                  customerFirstName,
                  customerLastName,
                  deliveredByFirstName,
                  deliveredByLastName,
                  eventDate,
                  serviceName,
                  status,
                }: AppointmentsRequestModel,
                i: number
              ) => (
                <AppointmentsListRow
                  customerAddress={customerAddress}
                  customerFirstName={customerFirstName}
                  customerLastName={customerLastName}
                  deliveredByFirstName={deliveredByFirstName}
                  deliveredByLastName={deliveredByLastName}
                  eventDate={eventDate}
                  serviceName={serviceName}
                  status={status}
                />
              )
            )}
        </TableBody>
      </Table>
      {shouldRenderLoader && (
        <Box className={classes.loaderSpinnerWrapper}>
          <ReactLoading type="bars" color="blue" height={100} width={100} />
        </Box>
      )}
    </TableContainer>
  );
};

export default AppointmentsTable;
