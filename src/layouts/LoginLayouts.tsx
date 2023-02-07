// @ts-ignore

export default function LoginLayout({ children }): any {
  return (
    <>
      <div>
        <main id="main">{children}</main>
      </div>

      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
    </>
  );
}
