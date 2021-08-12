import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import signUpFormStyle from "./signUpForm.style";
import CreateAccountStep from "./signUpSteps/createAccount";
import BusinessInfo from "./signUpSteps/businessInfo";
import AdditionalBusiness from "./signUpSteps/additionalBusiness";
import AdditionalCustomer from "./signUpSteps/additionalCustomer";
import { LogInUserTokens } from "../../../interfaces/userModels";

interface SignUpFormProps {
  currentUser: LogInUserTokens;
}

const useSignUpFormStyle = makeStyles(signUpFormStyle);

const SignupForm: React.FC<SignUpFormProps> = ({ currentUser }) => {
  const classes = useSignUpFormStyle();
  const [step, setStep] = useState(() => {
    if (!currentUser.accessToken) {
      return 'create account';
    }
    // return "business info"
    return "create account"
  });
  const [profileType, setProfileType] = useState("business");

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.signupFormContainer}
    >
      {step === "create account" && (
        <CreateAccountStep currentUser={currentUser} setStep={setStep} />
      )}
      {step === "business info" && (
        <BusinessInfo setStep={setStep} />
      )}
      {step === "additional business" && (
        <AdditionalBusiness setStep={setStep} />
      )}
      {step === "additional information" && (
        <AdditionalCustomer setStep={setStep} />
      )}
    </Grid>
  );
};

export default SignupForm;
