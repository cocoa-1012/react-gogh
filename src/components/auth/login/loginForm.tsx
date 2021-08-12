import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { USER_LOGIN } from "../../../store/actionNames/actionNames";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import useStyles from "./login.style";
import { Link } from "react-router-dom";
import { routers } from "../../../config/routers";
import CustomTextField from "../../customTextField/customTextField";
import CustomCheckbox from "../../customCheckbox/customCheckbox";
import LinkedinImage from "../../../assets/images/login/linkedin.svg";
import GoogleImage from "../../../assets/images/login/google.svg";
import QRImage from "../../../assets/images/login/qr-code.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isEmpty } from "../../../shared/hooks";
import { LoginFormProps } from "../../../interfaces/userModels";
import ReactLoading from "react-loading";

const LoginFormSection: React.FC<LoginFormProps> = ({ currentUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required").email("Invalid email address"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch({
        type: USER_LOGIN,
        payLoad: { email: values.email, password: values.password },
      });
      setLoading(true);
    },
  });

  useEffect(() => {
    if (!isEmpty(currentUser)) {
      if (currentUser.role == 2) {
        history.push(routers.customerSubscription);
      } else if (currentUser.role == 1) {
        history.push(routers.myServices);
      }
    }
  }, [currentUser]);

  return (
    <Container className={classes.formSectionContainer}>
      <Grid container direction="column" className={classes.loginForm}>
        <Typography variant="h1" className={classes.loginTitle}>
          Welcome back!
        </Typography>
        <Typography variant="body1" className={classes.loginDescription}>
          Please login to continue with Gogh
        </Typography>
        <CustomTextField
          label="Email address"
          name="email"
          type="email"
          value={formik.values.email}
          setValue={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <Typography variant="body1" className={classes.inputErrorMessage}>
            {formik.errors.email}
          </Typography>
        ) : null}
        <CustomTextField
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          setValue={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password ? (
          <Typography variant="body1" className={classes.inputErrorMessage}>
            {formik.errors.password}
          </Typography>
        ) : null}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.forgotPasswordContainer}
        >
          <CustomCheckbox
            checked={isRememberMe}
            onChange={setIsRememberMe}
            color="primary"
            label="Remember me"
          />
          <Typography variant="body1" className={classes.forgotPassword}>
            Forgot password?
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.splitingLineWrapper}
        >
          <hr className={classes.splitingLine} />
          <Typography variant="body1" className={classes.splitingText}>
            OR
          </Typography>
          <hr className={classes.splitingLine} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.socialLoginContainer}
        >
          <Box className={classes.socialLoginButton}>
            <img src={GoogleImage} alt="google" />
            <Typography variant="body1" className={classes.socialLoginText}>
              Login with Google
            </Typography>
          </Box>
          <Box className={classes.socialLoginButton}>
            <img src={LinkedinImage} alt="linkedin" />
            <Typography variant="body1" className={classes.socialLoginText}>
              Login with LinkedIn
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.qrCodeContainer}
        >
          <img src={QRImage} alt="QR code" />
          <Typography variant="body1" className={classes.qrScanText}>
            Scan QR to login
          </Typography>
        </Grid>
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
          onClick={() => formik.handleSubmit()}
        >
          {loading && isEmpty(currentUser) && (
            <ReactLoading type="spokes" color="white" height={30} width={30} />
          )}
          {!loading && <Typography variant="body1">LogIn</Typography>}
        </Button>
      </Grid>
      <Typography
        variant="body1"
        className={`${classes.goSignupText} link-elements`}
      >
        Don’t have an account?{" "}
        <Link
          to={routers.signup}
          className={`${classes.goSignupButton} link-elements`}
        >
          Sign up
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginFormSection;
