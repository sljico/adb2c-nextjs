import LoginLayout from "@/layouts/LoginLayouts";
import { NextPage } from "next";
export { getServerSideProps } from "./login";

const SocialLogin: NextPage<unknown> = () => {
  return (
    <LoginLayout>
      <div className="carescoutB2cLayout">
        <section>
          <div id="api" className="b2c-sociallogin"></div>
        </section>
      </div>
    </LoginLayout>
  );
};

export default SocialLogin;
