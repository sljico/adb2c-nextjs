// @ts-ignore
import styles from "@/styles/Home.module.css";

export default function LoginLayout({ children }: any): any {
  return (
    <>
      <div>
        <main id="main">{children}</main>
      </div>

      <style jsx global>
        {`
          body {
            padding: 10px;
          }
        `}
      </style>
    </>
  );
}
