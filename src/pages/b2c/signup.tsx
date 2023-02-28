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

        <div id="extension_termsOfUseContentWrapper">
          <li className="TextBox">
            <div className="attrEntry">
              <p>Terms and Conditions</p>

              <div className="textarea">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Proin gravida hendrerit lectus a. Morbi tristique senectus et
                netus et malesuada fames ac. Vitae suscipit tellus mauris a
                diam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Sit
                amet facilisis magna etiam tempor orci eu lobortis elementum. In
                cursus turpis massa tincidunt dui ut ornare lectus sit. In eu mi
                bibendum neque egestas congue quisque egestas. Nunc non blandit
                massa enim nec dui. Sed augue lacus viverra vitae congue eu
                consequat ac. Sit amet venenatis urna cursus. Volutpat est velit
                egestas dui id ornare. Sapien eget mi proin sed libero enim sed
                faucibus turpis. Risus pretium quam vulputate dignissim
                suspendisse in. Eros in cursus turpis massa tincidunt dui ut
                ornare lectus. Nunc consequat interdum varius sit amet mattis
                vulputate enim nulla. Semper quis lectus nulla at volutpat diam
                ut venenatis tellus. Gravida neque convallis a cras. Montes
                nascetur ridiculus mus mauris vitae. Cras adipiscing enim eu
                turpis. Nunc faucibus a pellentesque sit amet porttitor eget
                dolor morbi. Massa id neque aliquam vestibulum morbi blandit
                cursus. Tortor vitae purus faucibus ornare. Aliquam sem
                fringilla ut morbi tincidunt augue interdum velit euismod. At
                tellus at urna condimentum mattis pellentesque id nibh. In
                tellus integer feugiat scelerisque varius morbi enim nunc.
                Elementum nisi quis eleifend quam adipiscing vitae proin
                sagittis nisl. Euismod lacinia at quis risus sed vulputate odio
                ut. Eu turpis egestas pretium aenean pharetra magna ac. Morbi
                leo urna molestie at elementum eu facilisis. Lectus magna
                fringilla urna porttitor rhoncus dolor purus non. Adipiscing
                elit pellentesque habitant morbi tristique senectus et netus et.
                Morbi tincidunt augue interdum velit euismod in pellentesque
                massa. Augue lacus viverra vitae congue eu consequat ac felis
                donec. Morbi tincidunt augue interdum velit euismod. Dui
                faucibus in ornare quam viverra orci. Neque ornare aenean
                euismod elementum. Aliquam malesuada bibendum arcu vitae.
                Tristique senectus et netus et malesuada fames ac. Quisque
                egestas diam in arcu cursus euismod quis viverra nibh. Laoreet
                id donec ultrices tincidunt arcu non sodales. Semper auctor
                neque vitae tempus quam pellentesque. Lobortis elementum nibh
                tellus molestie nunc non. Nulla at volutpat diam ut venenatis.
                Aliquet eget sit amet tellus cras adipiscing enim. Sed euismod
                nisi porta lorem mollis aliquam ut. Enim diam vulputate ut
                pharetra. Est ultricies integer quis auctor elit sed vulputate
                mi sit. Adipiscing enim eu turpis egestas pretium. Arcu vitae
                elementum curabitur vitae nunc sed velit dignissim sodales. Sit
                amet commodo nulla facilisi. Venenatis cras sed felis eget velit
                aliquet sagittis id consectetur. Purus faucibus ornare
                suspendisse sed nisi. Nunc faucibus a pellentesque sit amet
                porttitor eget dolor morbi. Nunc sed blandit libero volutpat sed
                cras. Ullamcorper eget nulla facilisi etiam dignissim diam quis
                enim lobortis. A diam sollicitudin tempor id eu nisl. Sapien et
                ligula ullamcorper malesuada proin libero nunc. Interdum
                consectetur libero id faucibus. Lacus sed turpis tincidunt id
                aliquet. Augue mauris augue neque gravida in fermentum et
                sollicitudin. Pellentesque adipiscing commodo elit at imperdiet.
                Sit amet porttitor eget dolor morbi non. Sed nisi lacus sed
                viverra tellus in. Nullam ac tortor vitae purus. Neque aliquam
                vestibulum morbi blandit cursus risus at. Imperdiet proin
                fermentum leo vel orci porta non. Tortor aliquam nulla facilisi
                cras fermentum odio. Proin sed libero enim sed faucibus turpis
                in. Nunc congue nisi vitae suscipit tellus mauris a diam
                maecenas.
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
      {/* <script type="text/javascript" src="/js/test2.js"></script> */}
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      console.log('da');
      waitForElm('#extension_termsOfUseContentWrapper').then((el) => {
        console.log('el', el);
        const checkbox = document.querySelector('.CheckboxMultiSelect');
        console.log('checkbox', checkbox)
        const p = document.createElement('p');  
        const paraTextNode = document.createTextNode('HIPPA authorization');
        p.appendChild(paraTextNode);
        console.log('p', p);

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
      
      `,
        }}
      />
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
    </>
  );
};

export default Signup;
