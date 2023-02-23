import LoginLayout from "@/layouts/LoginLayouts";
import { NextPage } from "next";
import Script from "next/script";
export { getServerSideProps } from "./login";

const SocialLogin: NextPage<unknown> = () => {
  return (
    <LoginLayout>
      <div className="carescoutB2cLayout">
        <section>
          <div id="api" className="b2c-sociallogin"></div>
        </section>
      </div>

      <div id="extension_termsOfUseContentWrapper">
        <li className="TextBox">
          <div className="attrEntry">
            <p>Terms and Conditions</p>
            <div className="textarea">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, nobis repudiandae rerum iure officia aperiam iste
              excepturi qui quia mollitia neque aspernatur veritatis. Corrupti
              quia sequi nesciunt nobis accusamus, dolores, pariatur similique,
              reiciendis accusantium commodi cum est dignissimos adipisci
              ratione recusandae! Fugiat omnis veniam corporis maiores corrupti!
              Quaerat, itaque excepturi velit quos quia aliquam eum ab provident
              repudiandae asperiores voluptate ut incidunt corporis natus. Totam
              minus voluptatum quod labore enim eveniet optio ratione modi
              aperiam sunt saepe assumenda quidem tempore maxime fuga tempora
              officiis, deleniti quaerat sapiente vel. Doloribus dolorem
              accusantium perspiciatis commodi. Ea excepturi placeat ipsa
              accusamus sequi autem ab soluta distinctio. Placeat sequi omnis
              maiores nemo recusandae, debitis harum nam magnam, ut dolore dolor
              consequuntur corrupti nisi ad voluptates repellat! Tempore
              assumenda aliquam sapiente odit, a quis debitis doloremque nobis
              totam, similique, provident mollitia?
              <br />
              <br />
              <div>
                <a href="#">Terms of Service</a>
              </div>
              <br />
              <br />
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <br />
              <br />
              <div>
                <a href="#">Accessibility</a>
              </div>
            </div>
          </div>
        </li>
      </div>

      <Script id="social-login-script" strategy="beforeInteractive">
        {`
          setTimeout(() => {
            detach(document.getElementById("extension_termsOfUseContentWrapper"));
            detach(document.querySelector('ul > li.CheckboxMultiSelect'));
          }, 1500);

          function detach(el) {
            return el?.parentNode.removeChild(el);
          }

          function insertBefore(newNode, referenceNode) {
            referenceNode?.parentNode.insertBefore(newNode, referenceNode);
        `}
      </Script>
    </LoginLayout>
  );
};

export default SocialLogin;
