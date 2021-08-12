import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Fade, Modal, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./customersActionModal.style";
import CustomTextField from "../../customTextField/customTextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import closeIcon from "../../../assets/images/close.svg";
import {
  NewCustomerModel,
  CustomerDataModel,
} from "../../../interfaces/customers";
import { LogInUserTokens } from "../../../interfaces/userModels";
import moment from "moment";
import {
  ADD_NEW_CUSTOMERS,
  EDIT_CUSTOMERS,
} from "../../../store/actionNames/actionNames";

interface CustomersActionModalProps {
  addCustomersModal: boolean;
  setAddCustomersModal: (modalOpen: boolean) => void;
  currentUser: LogInUserTokens;
  page: number;
  sort: number;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  editItem: CustomerDataModel | undefined;
}

const CustomersActionModal: React.FC<CustomersActionModalProps> = ({
  addCustomersModal,
  setAddCustomersModal,
  currentUser,
  page,
  sort,
  isEdit,
  setIsEdit,
  editItem,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: editItem && isEdit ? editItem.email : "",
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      phoneNumber: Yup.string().phone().required("Required"),
      streetAddress: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const newCustomer: NewCustomerModel = {
        id: editItem && isEdit ? editItem.id : null,
        createdAt:
          isEdit && editItem ? editItem.createdAt : moment().toISOString(),
        updatedAt: moment().toISOString(),
        isDeleted: false,
        userId: editItem && isEdit ? editItem.userId : null,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        address: {
          streetAddress: values.streetAddress,
          city: values.city,
          state: values.state,
        },
        phoneNumber: values.phoneNumber,
        companyId: editItem && isEdit ? editItem.companyId : null,
        lastActivity:
          isEdit && editItem ? editItem.createdAt : moment().toISOString(),
        totalRevenue: 0,
        totalVisits: 0,
      };
      if (!isEdit) {
        dispatch({
          type: ADD_NEW_CUSTOMERS,
          payLoad: {
            customer: newCustomer,
            user: currentUser.accessToken,
            page,
            pageSize: 10,
            sort,
          },
        });
        clearModal();
      } else {
        dispatch({
          type: EDIT_CUSTOMERS,
          payLoad: {
            customer: newCustomer,
            user: currentUser.accessToken,
            page,
            pageSize: 10,
            sort,
          },
        });
      }
      setIsEdit(false);
      setAddCustomersModal(false);
      clearModal();
    },
  });
  const clearModal = () => {
    formik.values.email = editItem && isEdit ? editItem.email : "";
    formik.values.firstName = editItem && isEdit ? editItem.firstName : "";
    formik.values.lastName = editItem && isEdit ? editItem.lastName : "";
    formik.values.streetAddress =
      editItem && isEdit ? editItem.address.streetAddress : "";
    formik.values.city = editItem && isEdit ? editItem.address.city : "";
    formik.values.state = editItem && isEdit ? editItem.address.state : "";
    formik.values.phoneNumber = editItem && isEdit ? editItem.phoneNumber : "";
  };

  const [temp, setTemp] = useState(false)
  useEffect(() => {
    clearModal();
    isEdit ? setTemp(true) : setTemp(false);
    if (!temp) {
      clearModal();
    }
  }, [isEdit]);

  return (
    <Modal
      open={addCustomersModal}
      onClose={() => {
        setAddCustomersModal(false);
        setIsEdit(false);
      }}
      className={classes.addCustomersModal}
    >
      <Fade in={addCustomersModal}>
        {temp ? <Box className={classes.addCustomersModalBody}>
          <Box
            className={classes.closeModalButton}
            onClick={() => {
              setAddCustomersModal(false);
              setIsEdit(false);
            }}
          >
            <img src={closeIcon} alt="close modal" />
          </Box>
          <Typography variant="h1" className={classes.modalTitle}>
            {isEdit ? "Edit customer" : "Add new customer"}
          </Typography>
          <Typography variant="body1" className={classes.inputSectionLabel}>
            Email address
          </Typography>
          <CustomTextField
            label="Email address"
            type="email"
            name="email"
            value={formik.values.email}
            setValue={formik.handleChange}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.email}
            </Typography>
          ) : null}
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            className={classes.inputsRow}
          >
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                First name
              </Typography>
              <CustomTextField
                label="First name"
                name="firstName"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.firstName}
                required
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.firstName}
                </Typography>
              ) : null}
            </Box>
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                Last name
              </Typography>
              <CustomTextField
                label="Last name"
                name="lastName"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.lastName}
                required
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.lastName}
                </Typography>
              ) : null}
            </Box>
          </Grid>
          <Typography variant="body1" className={classes.inputSectionLabel}>
            Street address
          </Typography>
          <CustomTextField
            label="Street address"
            type="text"
            name="streetAddress"
            value={formik.values.streetAddress}
            setValue={formik.handleChange}
            required
          />
          {formik.touched.streetAddress && formik.errors.streetAddress ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.streetAddress}
            </Typography>
          ) : null}
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            className={classes.inputsRow}
          >
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                City
              </Typography>
              <CustomTextField
                label="City"
                name="city"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.city}
                required
              />
              {formik.touched.city && formik.errors.city ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.city}
                </Typography>
              ) : null}
            </Box>
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                State
              </Typography>
              <CustomTextField
                label="State"
                name="state"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.state}
                required
              />
              {formik.touched.state && formik.errors.state ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.state}
                </Typography>
              ) : null}
            </Box>
          </Grid>
          <Typography variant="body1" className={classes.inputSectionLabel}>
            Phone number
          </Typography>
          <CustomTextField
            label="Phone number"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            setValue={formik.handleChange}
            required
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.phoneNumber}
            </Typography>
          ) : null}
          <Button
            variant="contained"
            color="primary"
            className={classes.addContactButton}
            onClick={() => formik.handleSubmit()}
          >
            {isEdit ? "Edit contact" : "Add contact"}
          </Button>
        </Box> : <Box className={classes.addCustomersModalBody}>
          <Box
            className={classes.closeModalButton}
            onClick={() => {
              setAddCustomersModal(false);
              setIsEdit(false);
            }}
          >
            <img src={closeIcon} alt="close modal" />
          </Box>
          <Typography variant="h1" className={classes.modalTitle}>
            {isEdit ? "Edit customer" : "Add new customer"}
          </Typography>
          <Typography variant="body1" className={classes.inputSectionLabel}>
            Email address
          </Typography>
          <CustomTextField
            label="Email address"
            type="email"
            name="email"
            value={formik.values.email}
            setValue={formik.handleChange}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.email}
            </Typography>
          ) : null}
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            className={classes.inputsRow}
          >
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                First name
              </Typography>
              <CustomTextField
                label="First name"
                name="firstName"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.firstName}
                required
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.firstName}
                </Typography>
              ) : null}
            </Box>
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                Last name
              </Typography>
              <CustomTextField
                label="Last name"
                name="lastName"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.lastName}
                required
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.lastName}
                </Typography>
              ) : null}
            </Box>
          </Grid>
          <Typography variant="body1" className={classes.inputSectionLabel}>
            Street address
          </Typography>
          <CustomTextField
            label="Street address"
            type="text"
            name="streetAddress"
            value={formik.values.streetAddress}
            setValue={formik.handleChange}
            required
          />
          {formik.touched.streetAddress && formik.errors.streetAddress ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.streetAddress}
            </Typography>
          ) : null}
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            className={classes.inputsRow}
          >
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                City
              </Typography>
              <CustomTextField
                label="City"
                name="city"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.city}
                required
              />
              {formik.touched.city && formik.errors.city ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.city}
                </Typography>
              ) : null}
            </Box>
            <Box className={classes.halfWidthInput}>
              <Typography variant="body1" className={classes.inputSectionLabel}>
                State
              </Typography>
              <CustomTextField
                label="State"
                name="state"
                type="text"
                setValue={formik.handleChange}
                value={formik.values.state}
                required
              />
              {formik.touched.state && formik.errors.state ? (
                <Typography
                  variant="body1"
                  className={classes.inputErrorMessage}
                >
                  {formik.errors.state}
                </Typography>
              ) : null}
            </Box>
          </Grid>
          <Typography variant="body1" className={classes.inputSectionLabel}>
            Phone number
          </Typography>
          <CustomTextField
            label="Phone number"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            setValue={formik.handleChange}
            required
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.phoneNumber}
            </Typography>
          ) : null}
          <Button
            variant="contained"
            color="primary"
            className={classes.addContactButton}
            onClick={() => formik.handleSubmit()}
          >
            {isEdit ? "Edit contact" : "Add contact"}
          </Button>
        </Box>}
      </Fade>
    </Modal>
  );
};

export default CustomersActionModal;
