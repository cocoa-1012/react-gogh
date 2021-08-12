import { useSelector } from "react-redux";
import AuthLayout from "../../layouts/auth/authLayouts";
import SignupForm from "../../components/auth/signup/signupForm";
import { RootState } from "../../interfaces";

const SignupPage = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  return (
    <AuthLayout>
      <SignupForm currentUser={currentUser} />
    </AuthLayout>
  );
};

export default SignupPage;
