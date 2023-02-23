import LoginLayout from "@/layouts/LoginLayouts";
import Script from "next/script";
export { getServerSideProps } from "./login";

export default function Login() {
  return (
    <>
      <LoginLayout>
        <div className="carescoutB2cLayout">
          <section>
            <div id="api" className="b2c-signup"></div>
          </section>
        </div>

        <div>
          <li id="extension_termsOfUseContentWrapper" className="TextBox">
            <div className="attrEntry">
              <label htmlFor="extension_termsOfUseContent">
                Terms and Conditions
              </label>

              <textarea id="extension_termsOfUseContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                repellendus rerum odit, nam, voluptatibus voluptas fugit ut
                quaerat repellat eum odio quia esse fugiat magni sapiente hic
                consequuntur quae possimus. Doloribus est repellendus voluptate
                esse itaque quos quis voluptas atque natus ullam vel dolorum
                laboriosam et dignissimos, harum, minima laudantium! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Illo
                assumenda recusandae in molestiae quos. Quos porro excepturi
                officiis corrupti ullam!
              </textarea>
            </div>
          </li>
        </div>
      </LoginLayout>
      <Script id="signup-script" strategy="afterInteractive" async defer>
        {`
          console.log('dada');
          (function () {
            let tc = document.getElementById('extension_termsOfUseContentWrapper');
            let checkbox = document.querySelector('ul > li.CheckboxMultiSelect');
            let p = document.createElement('p');
            let paraTextNode = document.createTextNode('HIPPA Authroization');
            p.appendChild(paraTextNode);

            console.log(tc)
            console.log(checkbox)
            console.log(checkbox[0])

            detach(tc);
            insertBefore(tc, checkbox);
            insertBefore(p, checkbox);

            function detach(el) {
              return el?.parentNode.removeChild(el);
            }

            function insertBefore(newNode, referenceNode) {
              referenceNode?.parentNode.insertBefore(newNode, referenceNode);
            }
          })();
        `}
      </Script>
    </>
  );
}
