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
    width: 614,
    height: 700,
    border: 'solid 1px #f8f8fa',
    borderRadius: '10px',
  },

  titleContainer: {
    width: '100%',
    height: '44px',
    padding: '0px 60px',
    marginBottom: 30,
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

  textArea: {
    width: '100%',
    height: 197,
    padding: '0px 60px',
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
}));
