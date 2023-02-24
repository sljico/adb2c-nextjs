import LoginLayout from "@/layouts/LoginLayouts";
import { NextPage } from "next";
import Script from "next/script";
export { getServerSideProps } from "./login";

export default function SocialLogin() {
  return (
    <>
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
                quia sequi nesciunt nobis accusamus, dolores, pariatur
                similique, reiciendis accusantium commodi cum est dignissimos
                adipisci ratione recusandae! Fugiat omnis veniam corporis
                maiores corrupti! Quaerat, itaque excepturi velit quos quia
                aliquam eum ab provident repudiandae asperiores voluptate ut
                incidunt corporis natus. Totam minus voluptatum quod labore enim
                eveniet optio ratione modi aperiam sunt saepe assumenda quidem
                tempore maxime fuga tempora officiis, deleniti quaerat sapiente
                vel. Doloribus dolorem accusantium perspiciatis commodi. Ea
                excepturi placeat ipsa accusamus sequi autem ab soluta
                distinctio. Placeat sequi omnis maiores nemo recusandae, debitis
                harum nam magnam, ut dolore dolor consequuntur corrupti nisi ad
                voluptates repellat! Tempore assumenda aliquam sapiente odit, a
                quis debitis doloremque nobis totam, similique, provident
                mollitia?
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
      </LoginLayout>
      <Script id="social-login-script" strategy="beforeInteractive" async>
        {`
       console.log('beforeInteractive');

       waitForElm('#extension_termsOfUseContentWrapper').then((el) => {
         console.log('Element is ready');
         const checkbox = document.querySelectorAll('li.CheckboxMultiSelect');
         const p = document.createElement('p');
         const paraTextNode = document.createTextNode('HIPPA authorization');
         p.appendChild(paraTextNode);

        console.log(checkbox);
        console.log(checkbox[0]);
        console.log(checkbox[1]);

        detach(el);
        detach(checkbox[0]);
        detach(checkbox[1]);
        insertBefore(checkbox[0], document.querySelector('.b2c-sociallogin #attributeVerification .buttons'));
        insertBefore(checkbox[1], document.querySelector('.b2c-sociallogin #attributeVerification .buttons'));
        insertBefore(el, checkbox[0]);
        insertBefore(p, checkbox[0]);
        
         
         
        //  insertBefore(el, checkbox);
        //  insertBefore(p, checkbox);
       });

       function waitForElm(selector) {
         return new Promise(resolve => {
             if (document.querySelector(selector)) {
                 return resolve(document.querySelector(selector));
             }
     
             const observer = new MutationObserver(mutations => {
                 if (document.querySelector(selector)) {
                     resolve(document.querySelector(selector));
                     observer.disconnect();
                 }
             });
     
             observer.observe(document.body, {
                 childList: true,
                 subtree: true
             });
         });
       }

       function detach(el) {
         return el?.parentNode.removeChild(el);
       }

       function insertBefore(newNode, referenceNode) {
         referenceNode?.parentNode.insertBefore(newNode, referenceNode);
       }
     `}
      </Script>
    </>
  );
}
