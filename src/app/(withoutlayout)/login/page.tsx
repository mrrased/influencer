import LoginHome from "@/components/Form/Login/LoginHome";
import { BUSINESS_NAME, TAG_LINE } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Login - ${BUSINESS_NAME}`,
  description: `${TAG_LINE} - This is Login Page`,
};

const LoginPage = () => {
  return (
    <div>
      <LoginHome />
    </div>
  );
};

export default LoginPage;
