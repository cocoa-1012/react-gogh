import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { USER_REGISTER } from "../../../../store/actionNames/actionNames";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import useStyles from "./multiSignupSteps.style";
import CustomTextField from "../../../customTextField/customTextField";
import BusinessImage from "../images/business";
import CustomerImage from "../images/customer";
import CustomCheckbox from "../../../customCheckbox/customCheckbox";
import GoghLogoImage from "../../../../assets/images/gogh-logo-filled.png";
import { LogInUserTokens } from "../../../../interfaces/userModels";
import { signUpUserRole } from "../../../../constants/requestTypes";
import ReactLoading from "react-loading";
import { isEmpty } from "../../../../shared/hooks";

interface StepsProps {
  setStep: (e: string) => void;
  currentUser: LogInUserTokens;
}

const CreateAccountStep: React.FC<StepsProps> = ({ setStep, currentUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [profileType, setProfileType] = useState<number>(0);
  const [termsAgree, setTermsAgree] = useState<boolean>(false);
  const [passStrength, setPassStrength] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string().phone().required("Required"),
      password: Yup.string().required("Required"),
      passwordConfirm: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (
        values.password === values.passwordConfirm &&
        values.password.length >= 8
      ) {
        if (profileType !== 0) {
          const inputUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            phoneNumber: values.phoneNumber,
            role: profileType,
          };
          dispatch({
            type: USER_REGISTER,
            payLoad: inputUser,
          });
          setLoading(true);
          profileType == 2 ? setStep("additional information") : setStep("business info");
        } else {
          alert("Please select your profile type.");
        }
      } else if (values.password.length < 8) {
        alert("Password must be over than 8 characters.");
      } else {
        alert("Password is not correct. Please check again.");
      }
    },
  });

  // Set password strength
  const hasNumber = (value: string) => {
    return new RegExp(/[0-9]/).test(value);
  };
  const hasMixed = (value: string) => {
    return new RegExp(/[a-z]/).test(value) || new RegExp(/[A-Z]/).test(value);
  };
  const hasSpecial = (value: string) => {
    return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
  };

  useEffect(() => {
    if (
      hasMixed(formik.values.password) ||
      hasNumber(formik.values.password) ||
      hasSpecial(formik.values.password)
    ) {
      setPassStrength(1);
    }
    if (hasMixed(formik.values.password) && hasNumber(formik.values.password)) {
      setPassStrength(2);
    }
    if (
      hasMixed(formik.values.password) &&
      hasNumber(formik.values.password) &&
      hasSpecial(formik.values.password)
    ) {
      setPassStrength(3);
    }
    if (formik.values.password === "") {
      setPassStrength(0);
    }
  }, [formik.values.password]);

  return (
    <React.Fragment>
      <Grid container direction="row" alignItems="center" justify="center">
        <img src={GoghLogoImage} alt="logo" />
        <Typography variant="body1" className={classes.logoText}>
          Gogh
        </Typography>
      </Grid>
      <Typography variant="h1" className={classes.signupTitle}>
        Create your account
      </Typography>

      <Grid className={classes.signupForm}>
        <Typography variant="body1" className={classes.inputSectionLabel}>
          Account information
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
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          className={classes.inputsRow}
        >
          <Box className={classes.halfWidthInput}>
            <CustomTextField
              label="First name"
              name="firstName"
              type="text"
              setValue={formik.handleChange}
              value={formik.values.firstName}
              required
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Typography variant="body1" className={classes.inputErrorMessage}>
                {formik.errors.firstName}
              </Typography>
            ) : null}
          </Box>
          <Box className={classes.halfWidthInput}>
            <CustomTextField
              label="Last name"
              name="lastName"
              type="text"
              setValue={formik.handleChange}
              value={formik.values.lastName}
              required
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Typography variant="body1" className={classes.inputErrorMessage}>
                {formik.errors.lastName}
              </Typography>
            ) : null}
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          className={classes.inputsRow}
        >
          <Box className={classes.halfWidthInput}>
            <CustomTextField
              label="Create password"
              type="password"
              name="password"
              value={formik.values.password}
              setValue={formik.handleChange}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <Typography variant="body1" className={classes.inputErrorMessage}>
                {formik.errors.password}
              </Typography>
            ) : null}
          </Box>
          <Box className={classes.halfWidthInput}>
            <CustomTextField
              label="Confirm password"
              type="password"
              name="passwordConfirm"
              value={formik.values.passwordConfirm}
              setValue={formik.handleChange}
              required
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <Typography variant="body1" className={classes.inputErrorMessage}>
                {formik.errors.passwordConfirm}
              </Typography>
            ) : null}
          </Box>
        </Grid>
        <Grid
          container
          direction="column"
          className={classes.passStrengthMeterContainer}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.passStrengthMeterWrapper}
          >
            {[1, 2, 3].map((level, i) => (
              <Grid
                className={classes.passStrengthMeterItem}
                key={i}
                style={{
                  backgroundColor:
                    passStrength >= level ? "#FFD136" : "#E4E6F2",
                }}
              ></Grid>
            ))}
          </Grid>
          {passStrength > 0 && (
            <Typography variant="body1" className={classes.passStrengthText}>
              Strength:{" "}
              {passStrength === 1
                ? "Low"
                : passStrength === 2
                  ? "Medium"
                  : "High"}
            </Typography>
          )}
        </Grid>
        <Typography variant="body1" className={classes.inputSectionLabel}>
          Choose your profile type
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          className={classes.profileTypeInputsRow}
        >
          <Box
            className={classes.profileImageWrapper}
            style={{
              border: `2px solid ${profileType === signUpUserRole.businessOwner ? "#2255FF" : "#E4E6F2"
                }`,
            }}
            onClick={() => setProfileType(1)}
          >
            <BusinessImage
              imageColor={profileType === signUpUserRole.businessOwner ? "#2255FF" : "#999999"}
            />
            <Typography variant="body1" className={classes.profileTypeText}>
              Business
            </Typography>
          </Box>
          <Box
            className={classes.profileImageWrapper}
            style={{
              border: `2px solid ${profileType === signUpUserRole.customer ? "#2255FF" : "#E4E6F2"
                }`,
            }}
            onClick={() => setProfileType(2)}
          >
            <CustomerImage
              imageColor={profileType === signUpUserRole.customer ? "#2255FF" : "#999999"}
            />
            <Typography variant="body1" className={classes.profileTypeText}>
              Customer
            </Typography>
          </Box>
        </Grid>
        <CustomCheckbox checked={termsAgree} onChange={setTermsAgree}>
          <Typography
            variant="body1"
            className={classes.termsAndConditionsText}
          >
            I agree to <span>Terms & conditions</span>
          </Typography>
        </CustomCheckbox>
        <Button
          variant="contained"
          color="primary"
          className={classes.continueButton}
          onClick={() => formik.handleSubmit()}
        >
          {loading && isEmpty(currentUser) && (
            // {loading && !currentUser.accessToken && (
            <ReactLoading type="spokes" color="white" height={30} width={30} />
          )}
          {!loading && <Typography variant="body1">Continue</Typography>}
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CreateAccountStep;
