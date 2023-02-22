import LoginLayout from "@/layouts/LoginLayouts";
import { GetServerSideProps } from "next";

export default function Login() {
  return (
    <LoginLayout>
      <div className="carescoutB2cLayout">
        <section>
          <div id="api" className="b2c-login"></div>
        </section>
      </div>
    </LoginLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("test");

  return {
    props: {},
  };
};
