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

const allowedOrigins = [
  "https://adb2c-nextjs.vercel.app",
  "https://gworthpoc.b2clogin.com",
];
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { origin } = req.headers;

  if (origin) {
    const allowed = allowedOrigins.filter((i) => i === origin)[0];

    if (allowed) {
      res.setHeader("Access-Control-Allow-Origin", allowed);
    } else {
      console.warn("Origin not allowed: ", origin);
    }
  }

  return {
    props: {},
  };
};
