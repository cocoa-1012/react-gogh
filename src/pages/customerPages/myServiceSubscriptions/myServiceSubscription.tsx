import { Box, Button, Grid, Hidden, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import customerservicebackground from '../../../assets/images/myServices/customersubscriptionInfoBackImage.svg';
import plusIcon from '../../../assets/images/myServices/plus.svg';
import { customerSortOrder } from '../../../constants/requestTypes';
import { RootState } from '../../../interfaces';
import {
  MyServicesDataModel,
  MyServicesResponseModel
} from '../../../interfaces/myServices';
import { LogInUserTokens } from '../../../interfaces/userModels';
import MainLayout from '../../../layouts/main/mainLayout';
import { useLocalStorage } from '../../../shared/hooks';
import {
  ADD_NEW_SERVICE,
  EDIT_SERVICE,
  GET_SUBSCRIPTIONS
} from '../../../store/actionNames/actionNames';
import MyActiveServicesTable from "./myActiveServicesTable/myActiveServicesTable";
import useStyles from './myServiceSubscription.style';
import ServicesActionModal from './servicesActionModal/servicesActionModal';

interface MyServicesRootState {
  myServices: MyServicesResponseModel;
}

const MyServiceSubscriptionPage = () => {
  const dispatch = useDispatch();
  const currentUserInfo = useSelector((state: RootState) => state.currentUserName);
  const totalState = useSelector((state: any) => state);

  const mySubscriptionsData = useSelector((state: any) => state.getSubscriptions);
  console.log("totalState", totalState);

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [addServicesModal, setAddServicesModal] = useState<boolean>(false);
  const [isHourly, setIsHourly] = useState<boolean>(false);
  const classes = useStyles({ isHourly });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<MyServicesDataModel>();
  const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>(
    'userToken',
    {
      accessToken: '',
      refreshToken: '',
      role: 0,
    }
  );

  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<number>(customerSortOrder.createDateDesc);

  const addNewService = (serviceData: MyServicesDataModel) => {
    dispatch({
      type: ADD_NEW_SERVICE,
      payLoad: {
        serviceItem: serviceData,
        user: userToken.accessToken,
        page: pageNumber,
        pageSize: 10,
      },
    });
  };

  const editService = (edittedService: MyServicesDataModel) => {
    dispatch({
      type: EDIT_SERVICE,
      payLoad: {
        serviceItem: edittedService,
        user: userToken.accessToken,
        page: pageNumber,
        pageSize: 10,
      },
    });
  };

  useEffect(() => {
    console.log("CurrentUserInfo", currentUserInfo);
    dispatch({
      type: GET_SUBSCRIPTIONS,
      payLoad: {
        accessToken: userToken.accessToken,
        page: pageNumber,
        pageSize: 10,
      }
    })
  }, [currentUserInfo]);
  return (
    <MainLayout currentRouter="My Service Subscriptions">
      <Grid className={classes.pageContainer}>
        <Typography variant="h1" className={classes.pageTitle}>
          My active service subscriptions
        </Typography>
        <Grid className={classes.mySubscriptionsInfoSection}>
          <Box className={classes.mySubscriptionsInfoBlock}>
            <Typography variant="body1" className={classes.mySubscriptionsInfoName}>
              Welcome!
            </Typography>
            {currentUserInfo && (
              <Typography variant="h2" className={classes.mySubscriptionsInfoTitle}>
                {currentUserInfo.firstName + " " + currentUserInfo.lastName}
              </Typography>
            )}

          </Box>
          <Hidden mdDown>
            <img
              src={customerservicebackground}
              alt="mask group"
              className={classes.mySubscriptionsInfoBackImage}
            />
          </Hidden>
        </Grid>
        <Grid
          container
          className={classes.servicesTitleSection}
          alignItems="center"
        >
          <Typography variant="h1" className={classes.mySubscriptionsSubtitle}>
            List of active services
          </Typography>
          <Grid className={classes.serviceButtonWrapper}>
            <Button variant="contained" className={classes.viewBillingButton}>
              <Typography
                variant="body1"
                color="primary"
                className={classes.viewBillingButtonText}
              >
                View billing History
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.findServiceButton}
            // onClick={() => setAddServicesModal(true)}
            >
              <img src={plusIcon} alt="plus" />
              <Typography variant="body1" className={classes.findServiceText}>
                Find a service
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <MyActiveServicesTable
          mySubscriptionsData={mySubscriptionsData}
          currentUser={userToken}
          pageNumber={pageNumber}
          setAddServicesModal={setAddServicesModal}
        />
        <ServicesActionModal
          addServicesModal={addServicesModal}
          setAddServicesModal={setAddServicesModal}
          currentUser={userToken}
          addNewService={addNewService}
        />
      </Grid>
    </MainLayout>
  );
};

export default MyServiceSubscriptionPage;
