import LoginLayout from "@/layouts/LoginLayouts";
import { GetServerSideProps } from "next";

export default function Login() {
  return (
    <>
      <LoginLayout>
        <div id="api"></div>
      </LoginLayout>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam
      voluptatem quasi aut veniam eos nobis in provident hic quibusdam.
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("test");

  return {
    props: {},
  };
};
