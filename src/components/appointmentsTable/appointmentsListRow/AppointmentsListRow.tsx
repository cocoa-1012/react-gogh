import { useState } from 'react';

//interface
import { AppointmentsRequestModel } from '../../../interfaces/appointments';
//material
import { TableRow, TableCell, Box, Typography } from '@material-ui/core';

//components
import CustomCheckbox from '../../customCheckbox/customCheckbox';
import CustomAvatar from '../../customAvatar/customAvatar';
import AppointmentsModalReschedule from '../../appointmentsModalReschedule/AppointmentsModalReschedule';
//svg
import { ReactComponent as MessageIcon } from '../../../assets/images/message.svg';
import { ReactComponent as CallIcon } from '../../../assets/images/call.svg';
import { ReactComponent as ThreeDots } from '../../../assets/images/3 dots more.svg';

import CallMadeIcon from '@material-ui/icons/CallMade';
import useStyles from './AppointmentsListRow.style';

const AppointmentsListRow: React.FC<AppointmentsRequestModel> = ({
  customerAddress,
  customerFirstName,
  customerLastName,
  deliveredByFirstName,
  deliveredByLastName,
  eventDate,
  serviceName,
  status,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();

  const handleReschedule = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <CustomCheckbox checked={false} color="secondary" />
        </TableCell>
        <TableCell>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CustomAvatar
              firstName={customerFirstName}
              lastName={customerLastName}
              fontSize={18}
              size={30}
            />
            <Typography className={classes.customerNameText}>
              {customerFirstName}
            </Typography>
            <Typography className={classes.customerLastNameText}>
              {customerLastName}
            </Typography>
          </Box>
        </TableCell>
        <TableCell>
          <Typography className={classes.customerAddresText}>
            {customerAddress.streetAddress}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography className={classes.customerDirections}>
            Get directions
            <CallMadeIcon className={classes.directionsIcon} />
          </Typography>
        </TableCell>
        <TableCell>{serviceName}</TableCell>
        <TableCell>
          {status === 1 && (
            <Box className={classes.rowActionIconButton}>
              <Box
                style={{
                  backgroundColor: '#ffd136',
                }}
                className={classes.statusBar}
              />
              <Typography className={classes.customerTextIcons}>
                Pending
              </Typography>
            </Box>
          )}
          {status === 2 && (
            <Box className={classes.rowActionIconButton}>
              <Box
                style={{
                  backgroundColor: '#2255ff',
                }}
                className={classes.statusBar}
              />
              <Typography className={classes.customerTextIcons}>
                Scheduled
              </Typography>
            </Box>
          )}
          {status === 3 && (
            <Box className={classes.rowActionIconButton}>
              <Box
                style={{ backgroundColor: ' #2dca73' }}
                className={classes.statusBar}
              />
              <Typography style={{ paddingLeft: '13px' }}>Completed</Typography>
            </Box>
          )}
          {status === 4 && (
            <Box className={classes.rowActionIconButton}>
              <Box
                style={{ backgroundColor: '##FF0000' }}
                className={classes.statusBar}
              />
              <Typography style={{ paddingLeft: '13px' }}>Cancelled</Typography>
            </Box>
          )}
        </TableCell>
        <TableCell>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography className={classes.deliveredByName}>
              {deliveredByFirstName}
            </Typography>
            <Typography className={classes.deliveredByLastName}>
              {deliveredByLastName}
            </Typography>
          </Box>
        </TableCell>
        <TableCell>
          <Box className={classes.rowActionIconButton}>
            <MessageIcon />
            <Typography style={{ paddingLeft: '13px' }} variant="body1">
              Message
            </Typography>
          </Box>
        </TableCell>

        <TableCell>
          <Box className={classes.rowActionIconButton}>
            <CallIcon />
            <Typography style={{ paddingLeft: '13px' }} variant="body1">
              Call
            </Typography>
          </Box>
        </TableCell>
        <TableCell>
          <Box>
            <ThreeDots
              onClick={handleReschedule}
              style={{ cursor: 'pointer' }}
            />
          </Box>
        </TableCell>
        {openDialog && (
          <AppointmentsModalReschedule
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            customerFirstName={customerFirstName}
            customerLastName={customerLastName}
            serviceName={serviceName}
            eventDate={eventDate}
          />
        )}
      </TableRow>
    </>
  );
};

export default AppointmentsListRow;
