import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  tableElement: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowActionIconButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: 15,
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

  statusBar: {
    width: 10,
    height: 10,
    borderRadius: '100%',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 500,
    marginLeft: 15,
  },

  customerNameText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#3a3f5c',
    paddingLeft: 30,
  },
  customerLastNameText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#3a3f5c',
    paddingLeft: 10,
  },
  customerAddresText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#3a3f5c',
  },
  customerDirections: {
    display: 'flex',
    fontSize: 14,
    fontWeight: 600,
    color: '#b7bbd8',
    cursor: 'pointer',
    alignItems: 'center',
  },
  directionsIcon: {
    paddingLeft: 3,
    width: 15,
    height: 15,
  },
  deliveredByName: {
    fontSize: 14,
    fontWeight: 500,
    color: '#3a3f5c',
  },
  deliveredByLastName: {
    fontSize: 14,
    fontWeight: 500,
    color: '#3a3f5c',
    paddingLeft: 10,
  },
  customerTextIcons: {
    fontSize: 14,
    fontWeight: 500,
    color: '#3a3f5c',
    paddingLeft: 13,
  },
}));
