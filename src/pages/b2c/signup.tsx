import LoginLayout from "@/layouts/LoginLayouts";
import { GetServerSideProps, NextPage } from "next";
import Script from "next/script";
export { getServerSideProps } from "./login";
import Head from "next/head";

const Signup: NextPage<unknown> = () => {
  return (
    <>
      <Head>
        {/* <script type="text/javascript" src="..."></script> */}
        {/* <script type="text/javascript" src="/js/test2.js"></script> */}
      </Head>
      <LoginLayout>
        <div className="carescoutB2cLayout">
          <section>
            <div id="api" className="b2c-signup"></div>
          </section>
        </div>

        <div id="container">
          <div className="extension_termsOfUseContentWrapper">
            <li className="TextBox">
              <div className="attrEntry">
                <p>Terms and Conditions</p>

                <div className="textarea">
                  <button id="myBtn">Open Modal</button>
                </div>
              </div>
            </li>
          </div>
          <p>HIPPA authorization</p>
        </div>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </LoginLayout>
      {/* <script type="text/javascript" src="/js/test2.js"></script> */}
      {/* <script src="../../test.js"></script> */}
      {/* <Script id="signup-script" strategy="beforeInteractive">
        {`
          console.log('da');
          waitForElm('#extension_termsOfUseContentWrapper').then((el) => {
            const checkbox = document.querySelector('ul > li.CheckboxMultiSelect');
            const p = document.createElement('p');  
            const paraTextNode = document.createTextNode('HIPPA authorization');
            p.appendChild(paraTextNode);

            detach(el);
            insertBefore(el, checkbox);
            insertBefore(p, checkbox);
          });

          function waitForElm(selector) {
            return new Promise(resolve => {
              if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector))
              }

              const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                  resolve (document.querySelector(selector));
                  observer.disconnect();
                }
              });

              observer.observe(document.body, {
                childList: true,
                subtree: true
              })
            });
          }

          function detach(el) {
            return el?.parentNode.removeChild(el);
          }

          function insertBefore(newNode, referenceNode) {
            referenceNode?.parentNode.insertBefore(newNode, referenceNode);
          }
        `}
      </Script> */}
      <Script strategy="beforeInteractive">
        {`
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        console.log(modal, btn, span);

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          console.log('click')
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          console.log('close')
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          console.log('outside')
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      `}
      </Script>
    </>
  );
};

export default Signup;
