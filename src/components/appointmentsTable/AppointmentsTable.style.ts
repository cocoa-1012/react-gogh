import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: '0 20px',
    marginTop: 30,
  },
  tableElement: {
    display: 'flex',
    flexDirection: 'column',
  },
  tableHead: {
    width: '100%',
  },

  tableRow: {
    width: '100%',
  },

  tableHeadText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#B7BBD8',
    maxWidth: 200,
  },

  table: {
    minWidth: 950,
  },
  loaderSpinnerWrapper: {
    width: '100%',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
