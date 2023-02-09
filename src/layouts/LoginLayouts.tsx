// @ts-ignore
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
