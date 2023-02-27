import LoginLayout from "@/layouts/LoginLayouts";
import { NextPage } from "next";

export { getServerSideProps } from "./login";

const ForgotPassword: NextPage<unknown> = () => {
  return (
    <LoginLayout>
      <div className="carescoutB2cLayout">
        <section>
          <div id="api" className="b2c-forgotpassword"></div>
        </section>
      </div>
    </LoginLayout>
  );
};

export default ForgotPassword;
