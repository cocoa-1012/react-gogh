import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  modal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    border: 'solid 1px #f8f8fa',
    borderRadius: '10px',
    width: 614,
    height: 716,
  },

  titleContainer: {
    width: '100%',
    height: '44px',
    padding: '0px 60px',
    marginBottom: 43,
  },
  titleModal: {
    fontSize: 36,
    fontWeight: 800,
  },

  inputsItems: {
    width: '100%',
    height: '84px',
    padding: '0px 60px',
    marginBottom: 30,
  },

  inputsTitle: {
    paddingBottom: '15px',
    fontSize: '14px',
    fontWeight: 'bold',
  },

  button: {
    width: '109px',
    height: '50px',
    boxShadow: '0 10px 30px 0 rgba(34, 85, 255, 0.25)',
    backgroundColor: '#2255ff',
    color: '#FFF',
    padding: ' 16px 25px',

    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#2255ff',
      color: '#fff',
    },
  },

  customerTextField: {
    border: ' solid 2px #e4e6f2',
    borderRadius: '10px',
    height: '50px',
    '& .MuiInputBase-root': {
      height: '100%',
      paddingLeft: 8,
    },
  },

  customerSelectField: {
    border: ' solid 2px #e4e6f2',
    borderRadius: '10px',
    height: '50px',
    '& .MuiInputBase-root': {
      height: '100%',
      paddingLeft: 8,
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: '#FFF',
    },
    '& .MuiSelect-icon': {
      color: 'black',
    },
  },

  customerDatePicker: {
    border: 'solid 2px #e4e6f2',
    borderRadius: '10px',
    height: '50px',
    marginTop: 0,
    '& .MuiInputBase-root': {
      height: '100%',
      padding: 6,
      '&:hover': {
        backgroundColor: '#FFF',
      },
    },
    '& .MuiSelect-icon': {
      color: 'black',
    },
  },
}));
