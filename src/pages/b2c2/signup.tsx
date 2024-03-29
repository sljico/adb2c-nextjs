import LoginLayout from "@/layouts/LoginLayouts";
import { Head } from "next/document";
import Script from "next/script";
import Style from "styled-jsx/style";
export { getServerSideProps } from "./login";

export default function Signup() {
  return (
    <>
      <LoginLayout>
        <div className="carescoutB2cLayout">
          <section>
            <div id="api" className="b2c-signup"></div>
          </section>
        </div>

        <div id="extension_termsOfUseContentWrapper">
          <li className="TextBox">
            <div className="attrEntry">
              <p>Terms and Conditions2</p>

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
      <Style>
        {`

body {

  margin: 0;

  font-family: arial;

  background-attachment: fixed;

  background-repeat: no-repeat;

  background-size: cover;

  background-color: #7848ff;

  font-size: inherit;

}

main {

  margin: auto;

  max-width: 385px;

  padding: 5% 0;

}

a {

  color: #7848ff;

  text-decoration: none;

  font-size: 19px;

}

.card {

  background-clip: border-box;

  border: 0;

  border-radius: 0.25rem;

  display: flex;

  flex-direction: column;

  min-width: 0;

}

.card-header {

  text-align: center;

  margin-bottom: 15px;

}

.card-body {

  flex: 1 1 auto;

  padding: 0 20px;

}

.b2c-sociallogin .intro > p {

  margin-bottom: 0 !important;

}

.intro > p,

#api h2,

#api h3 {

  font-weight: 500;

  line-height: 1.25;

  margin-bottom: 1.5rem !important;

  text-align: center;

  font-size: 1.15rem;

  color: #fff;

  margin: 0;

}

#api button {

  background-color: #e7fe5f;

  color: #333;

  font-weight: bold;

  border-radius: 10rem !important;

  font-size: 0.81rem !important;

  line-height: 1.5;

  padding: 0.84rem 2.14rem;

  text-align: center;

  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  user-select: none;

  width: 100% !important;

  border: none;

  font-size: 1.188rem !important;

  text-transform: none !important;

  height: 56px;

  white-space: nowrap;

}

button:active,

button:focus,

button:hover {

  cursor: pointer;

}

button:disabled {

  opacity: 0.65;

}

.create,

.localAccount {

  border-top: 1px solid #3d247f;

  margin-top: 1.5rem;

  padding-top: 1.5rem;

}

.create > p {

  color: #fff;

  display: flex;

  font-size: 1.188rem;

  justify-content: flex-end;

  margin: 0;

}

#createAccount {

  margin-left: 0.25rem;

  color: #e7fe5f;

}

.attrEntry,

.entry-item {

  margin-top: 1.5rem;

  position: relative;

}

#email_label {

  margin-top: 20px;

  display: block;

}

.attrEntry label,

.entry-item label {

  color: #fff;

  letter-spacing: -0.1px;

  font-size: 1.0625rem;

  font-weight: 500;

}

.attrEntry input,

.entry-item input {

  box-sizing: border-box;

  background-clip: padding-box;

  background-color: #fff;

  background-image: none;

  border: none;

  border-radius: 16px;

  color: #333;

  display: block;

  font-size: 1rem;

  line-height: 1.5;

  padding: 0.3rem 0 0.55rem;

  transition: border-color 0.15s ease-in-out,

    box-shadow 0.15s ease-in-out;

  width: 100% !important;

  padding: 1.1rem;

  max-height: 56px;

  margin-top: 0.75rem;

}

.attrEntry input,

.entry-item input {

  background-color: #fff;

  box-shadow: none;

  transition: all 0.3s;

}

.attrEntry input.highlightError,

.entry-item.highlightError {

  border: 1px solid #f44336;

}

.attrEntry input:focus,

.entry-item input:focus {

  border: 1px solid #e7fe5f;

}

.verifyInput {

  margin-bottom: 22px !important;

}

.verificationInfoText {

  color: #fff;

}

.verificationSuccessText {

  color: #e7fe5f;

}

#forgotPassword {

  float: right;

  font-size: 0.8rem;

  color: #e7fe5f;

}

.error,

.error > p {

  color: #e7ff5a;

  font-size: 0.8rem;

  margin: 0;

}

.buttons {

  margin-top: 1.5rem;

}

#api > .buttons {

  margin: 0;

}

.buttons.verify {

  display: flex;

  flex-wrap: wrap;

  flex-direction: row-reverse;

  justify-content: space-between;

}

.buttons.verify button {

  width: 162px;

  padding: 0;

  font-size: 1rem;

}

#api #emailVerificationControl_but_verify_code,

#api #emailVerificationControl_but_send_new_code {

  width: 162px !important;

  font-size: 0.95rem !important;

  padding: 14px 1%;

}

#attributeVerification > .buttons {

  border-top: 1px solid #e9ecef;

  margin-top: 1.5rem;

  padding-top: 1.5rem;

}

.b2c-sociallogin #attributeVerification > .buttons {

  border-top: 0;

}

.card,

.card-body {

  position: relative;

}

.card,

button {

  word-wrap: break-word;

}

#displayName_label,

#displayName,

#email_intro,

.editButton,

.attrEntry .tiny,

.b2c-signup .heading + .buttons,

.divider,

.b2c-forgotpassword #cancel,

.heading {

  display: none !important;

}

#continue {

  margin-bottom: 1rem;

}

#container {

  position: absolute;

  bottom: 443px;

  width: Calc(100% - 40px);

  border-bottom: 1px solid #919191;

}

#verifying_blurb {

  color: #fff;

  padding-top: 15px;

}

.extension_termsOfUseContentWrapper {

  border-top: 1px solid #3d247f;

  margin-bottom: 35px;

}

.extension_termsOfUseContentWrapper .textarea a {

  color: #fff;

  text-decoration: underline;

}

.extension_termsOfUseContentWrapper p {

  margin: 0;

  border-bottom: 1px solid #919191;

  font-weight: 700;

  font-size: 28px;

  color: #fff;

}

.extension_termsOfUseContentWrapper + p {

  padding-bottom: 20px;

}

.extension_termsOfUseContentWrapper p {

  border: none;

}

#api ul {

  padding: 0;

  margin: 0;

}

.extension_termsOfUseContentWrapper,

#api ul li {

  list-style-type: none;

}

.textarea {

  padding: 0;

  border-radius: 0;

  height: 200px;

  padding-right: 25px;

  margin-top: 10px;

  overflow-y: scroll;

  color: #fff;

}

#extension_termsOfUseContent:focus-visible {

  outline: none;

}

.CheckboxMultiSelect {

  border-bottom: 1px solid #919191;

  padding-bottom: 13px;

  list-style-type: none;

  position: relative;

}

.CheckboxMultiSelect > .attrEntry {

  display: flex;

  flex-wrap: wrap;

  flex-direction: row-reverse;

  align-items: center;

  justify-content: space-between;

}

.CheckboxMultiSelect .error {

  order: 3;

  text-align: left;

  width: 100%;

  position: absolute;

  bottom: -12px;

}

input[type='checkbox'] {

  width: initial !important;

  margin: 0;

}

input[type='checkbox'] + label {

  flex: 1 1 auto;

  color: #fff;

  width: 90%;

  margin-right: auto;

}

#api #emailVerificationControl_but_verify_code,

#api .sendCode,

#api #email_ver_but_resend,

#api #cancel {

  background-color: transparent;

  color: #fff;

  border: 1px solid #fff;

  font-weight: 400;

}

#attributeList > ul > li.TextBox:first-child {

  border-bottom: 1px solid #3d247f;

  padding-bottom: 1.75rem;

}

.b2c-sociallogin #attributeList ul li:last-child {

  margin-bottom: 395px;

}

.b2c-signup #attributeList ul,

.b2c-sociallogin #attributeList ul {

  display: flex;

  flex-wrap: wrap;

}

#email_ver_input_label,

.b2c-signup #attributeList ul li,

.b2c-sociallogin #attributeList ul li {

  width: 100%;

}

.b2c-sociallogin .attrEntry input,

.entry-item input {

  margin-bottom: 0;

}

.b2c-sociallogin

  #attributeList

  ul

  li.CheckboxMultiSelect:nth-child(1) {

  order: 3;

}

.b2c-sociallogin

  #attributeList

  ul

  li.CheckboxMultiSelect:nth-child(2) {

  order: 4;

}

.b2c-sociallogin

  #attributeList

  ul

  li.CheckboxMultiSelect:nth-child(3) {

  order: 5;

}

.b2c-sociallogin

  #attributeList

  ul

  li.CheckboxMultiSelect:nth-child(3)

  + li.TextBox {

  display: none;

}

.b2c-signup #attributeList ul li:nth-child(2) {

  order: 3;

}

.b2c-signup #attributeList ul li:nth-child(3) {

  order: 4;

  margin-bottom: 390px;

}

.b2c-signup #attributeList ul li:nth-child(4) {

  order: 1;

}

.b2c-signup #attributeList ul li:nth-child(5) {

  order: 2;

}

.b2c-signup #attributeList ul li:nth-child(6) {

  order: 5;

}

.b2c-signup #attributeList ul li:nth-child(7) {

  order: 7;

}

.b2c-signup #attributeList ul li:nth-child(8) {

  order: 6;

}

#attributeList > ul > li:not(:first-child):not(.CheckboxMultiSelect) {

  margin-top: 0.65rem;

}

#attributeList + .buttons {

  border-top: none;

  flex-wrap: wrap;

}

input::-webkit-input-placeholder {

  color: transparent;

}

::-webkit-input-placeholder {

  color: transparent;

}

:-moz-placeholder {

  color: transparent;

}

::-moz-placeholder {

  color: transparent;

}

:-ms-input-placeholder {

  color: transparent;

}

.textarea::-webkit-scrollbar {

  width: 10px;

}

.textarea::-webkit-scrollbar-track {

  background: #efefef;

}

.textarea::-webkit-scrollbar-thumb {

  background: #545433;

}

@media (min-width: 320px) {

  .buttons.verify button {

    width: 100%;

  }

  .buttons #email_ver_but_verify {

    margin-bottom: 20px;

  }

  .buttons #email_ver_but_verify,

  .buttons #email_ver_but_resend {

    width: 100% !important;

  }

}

#simplemodal-container {

  color: #fff !important;

}

@media (min-width: 400px) {

  .buttons #email_ver_but_verify {

    margin-bottom: 0;

  }

  .buttons #email_ver_but_verify,

  .buttons #email_ver_but_resend {

    width: 45% !important;

    padding: 0.85rem 0.52rem;

  }

}



        `}
      </Style>
      <Script id="signup-script" strategy="beforeInteractive">
        {` 
           waitForElm('#extension_termsOfUseContentWrapper').then((el) => {
              console.log('Element is ready');
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
