import { NextPage } from "next";

export { getServerSideProps } from "./login";

const ForgotPassword: NextPage<unknown> = () => {
  return (
    <div>
      <div className="carescoutB2cLayout">
        <section>
          <div id="api" className="b2c-forgotpassword"></div>
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;
