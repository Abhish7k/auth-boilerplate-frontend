import type React from "react";
import AuthLayout from "../components/auth/AuthLayout";

const SignInPage: React.FC = () => {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    ></AuthLayout>
  );
};

export default SignInPage;
