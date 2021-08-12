import React from "react";
import { useSelector } from "react-redux";
import AuthLayout from "../../layouts/auth/authLayouts";
import LogoSection from "../../components/auth/login/logoSection";
import LoginFormSection from "../../components/auth/login/loginForm";
import { LogInUserTokens } from "../../interfaces/userModels";

interface RootState {
  currentUser: LogInUserTokens;
}

const LoginPage = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  return (
    <AuthLayout>
      <React.Fragment>
        <LogoSection />
        <LoginFormSection currentUser={currentUser} />
      </React.Fragment>
    </AuthLayout>
  );
};

export default LoginPage;
