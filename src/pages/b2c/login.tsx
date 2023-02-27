import { GetServerSideProps, NextPage } from "next";

const Login: NextPage<unknown> = () => {
  return (
    <div className={"b2cCustomWrapper"}>
      <div className="carescoutB2cLayout">
        <section>
          <div id="api" className="b2c-login"></div>
        </section>
      </div>
    </div>
  );
};

const allowedOrigins = (process.env.ALLOWED_LOGIN_ORIGINS || "").split(",");
export const getServerSideProps: GetServerSideProps<{}> = async ({
  req,
  res,
}) => {
  const { origin } = req.headers;
  if (origin) {
    const allowed = allowedOrigins.filter((i) => i === origin)[0];
    if (allowed) {
      res.setHeader("Access-Control-Allow-Origin", allowed);
    } else {
      console.warn(
        `Not allowing login call from ${origin} - it's not in "${allowedOrigins.join(
          ","
        )}"`
      );
    }
  }

  return {
    props: {},
  };
};

export default Login;
