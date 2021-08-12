import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MY_SERVICES,
  ADD_NEW_SERVICE,
  EDIT_SERVICE,
} from '../../store/actionNames/actionNames';
import { Grid, Typography, Box, Hidden, Button } from '@material-ui/core';
import useStyles from './myServices.style';
import MainLayout from '../../layouts/main/mainLayout';
import MaskGroupImage from '../../assets/images/myServices/Mask-Group.svg';
import { LogInUserTokens } from '../../interfaces/userModels';
import MyServicesTable from '../../components/myServicesTable/myServicesTable';
import plusIcon from '../../assets/images/myServices/plus.svg';
import ServicesActionModal from '../../components/servicesActionModal/servicesActionModal';
import {
  MyServicesDataModel,
  MyServicesResponseModel,
} from '../../interfaces/myServices';
import { CompanyInfoModel } from '../../interfaces/companyInfo';
import { useLocalStorage } from '../../shared/hooks';
import { RootState } from '../../interfaces';
import { customerSortOrder } from '../../constants/requestTypes';
import { CUSTOMERS } from '../../store/actionNames/actionNames';

interface MyServicesRootState {
  myServices: MyServicesResponseModel;
}

const MyServicesPage = () => {
  const dispatch = useDispatch();
  const myServicesData: MyServicesResponseModel = useSelector(
    (state: MyServicesRootState) => state.myServices
  );
  const stateTest: any = useSelector((state: any) => state);
  const customers = useSelector((state: RootState) => state.customers);
  const totalState = useSelector((state: any) => state);
  const [companyInfo, setCompanyInfo] = useLocalStorage<CompanyInfoModel>(
    'companyInfo',
    {
      id: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: true,
      name: 'string',
      website: 'string',
      logo: 'string',
      address: {
        streetAddress: 'string',
        city: 'string',
        state: 'string',
      },
      description: 'string',
      companyPortfolio: [
        {
          photo: 'string',
          isCoverPhoto: true,
        },
      ],
      servicesOffered: [
        {
          id: 'string',
          createdAt: new Date(),
          updatedAt: new Date(),
          isDeleted: true,
          name: 'string',
          description: 'string',
          category: 'string',
          pricingType: 1,
          amount: 0,
          companyId: 'string',
          coverPhotoIndex: 0,
          photos: ['string'],
          tags: ['string'],
          companyCity: 'string',
          companyState: 'string',
          alreadySubscribed: true,
        },
      ],
    }
  );
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
    dispatch({
      type: MY_SERVICES,
      payLoad: {
        user: userToken.accessToken,
        page: pageNumber,
        pageSize: 10,
      },
    });
    dispatch({
      type: CUSTOMERS,
      payLoad: {
        accessToken: userToken.accessToken,
        sort: sort,
        page: page,
        pageSize: 10,
      },
    });
  }, []);
  return (
    <MainLayout currentRouter="My Services">
      <Grid className={classes.pageContainer}>
        <Typography variant="h1" className={classes.pageTitle}>
          My services
        </Typography>
        <Grid className={classes.myServicesInfoSection}>
          <Box className={classes.myServicesInfoBlock}>
            <Typography variant="body1" className={classes.myServicesInfoName}>
              Company info
            </Typography>
            {companyInfo && (
              <Typography variant="h2" className={classes.myServicesInfoTitle}>
                {companyInfo.name}
              </Typography>
            )}
            {companyInfo.address && (
              <Typography
                variant="body1"
                className={classes.myServicesInfoDescription}
              >
                {companyInfo.address.streetAddress}, {companyInfo.address.city}
                <br />
                {companyInfo.address.state}
              </Typography>
            )}
          </Box>
          <Box className={classes.myServicesInfoBlock}>
            <Typography variant="body1" className={classes.myServicesInfoName}>
              Customers
            </Typography>
            {customers && (
              <Typography variant="h2" className={classes.myServicesInfoTitle}>
                {customers.count}
              </Typography>
            )}
            <Typography
              variant="body1"
              className={classes.myServicesInfoDescription}
            >
              Number of total customers
            </Typography>
          </Box>
          <Hidden mdDown>
            <img
              src={MaskGroupImage}
              alt="mask group"
              className={classes.myServicesInfoImage}
            />
          </Hidden>
        </Grid>
        <Grid
          container
          className={classes.servicesTitleSection}
          alignItems="center"
        >
          <Typography variant="h1" className={classes.myServicesSubtitle}>
            List of services
          </Typography>
          <Grid className={classes.serviceButtonWrapper}>
            <Button variant="contained" className={classes.viewProfileButton}>
              <Typography
                variant="body1"
                color="primary"
                className={classes.viewProfileButtonText}
              >
                View public profile
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.addServiceButton}
              onClick={() => setAddServicesModal(true)}
            >
              <img src={plusIcon} alt="plus" />
              <Typography variant="body1" className={classes.addServiceText}>
                Add a service
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <MyServicesTable
          myServicesData={myServicesData}
          currentUser={userToken}
          pageNumber={pageNumber}
          setIsEdit={setIsEdit}
          setEditItem={setEditItem}
          setAddServicesModal={setAddServicesModal}
        />
        <ServicesActionModal
          addServicesModal={addServicesModal}
          setAddServicesModal={setAddServicesModal}
          currentUser={userToken}
          addNewService={addNewService}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editItem={editItem}
          editService={editService}
        />
      </Grid>
    </MainLayout>
  );
};

export default MyServicesPage;
