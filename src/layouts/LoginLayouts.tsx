import { Header } from "@/components/Header/Header";
import { Head } from "next/document";
import Script from "next/script";
import Image from "next/image";
import logo from "../../public/logo.png";

// @ts-ignore
export default function LoginLayout({ children }: any): any {
  return (
    <div>
      <main id="main" role="main">
        <div className="carescoutB2cLayout">
          <section>
            <div className="card">
              <div className="card-header">
                <img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>' />
              </div>
              <div className="card-body">{children}</div>
            </div>
          </section>
        </div>
      </main>

      <style jsx global>
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
            max-width: 420px;
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
            margin-bottom: 44px;
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
            box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
              0 2px 10px 0 rgb(0 0 0 / 12%);
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
            text-transform: capitalize !important;
          }

          button:active,
          button:focus,
          button:hover {
            border: 1px solid #7848ff;
            outline: 0;
          }

          button:disabled {
            opacity: 0.65;
          }

          .options > div > button:before {
            content: url(test/static/tenant/templates/idp_logos/colored/google.svg);
            padding-right: 0.25rem;
            display: inline-block;
            width: 20px;
            height: 15px;
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

          .attrEntry label,
          .entry-item label {
            color: #fff;
            letter-spacing: -0.1px;
            font-size: 1.188rem;
            font-weight: 500;
          }

          .attrEntry input,
          .entry-item input {
            box-sizing: border-box;
            background-clip: padding-box;
            background-color: transparent;
            background-image: none;
            border: 1px solid #cccdd1;
            border-radius: 16px;
            color: #fff;
            display: block;
            font-size: 1rem;
            line-height: 1.5;
            margin: 0 0 0.5rem;
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
            background-color: transparent;
            box-shadow: none;
            outline: 0;
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
            padding-bottom: 15px;
            display: block;
          }

          #forgotPassword {
            float: right;
            font-size: 0.8rem;
            color: #e7fe5f;
          }

          .error,
          .error > p {
            color: #f44336;
            font-size: 0.8rem;
            margin: 0;
          }

          .buttons {
            margin-top: 1.5rem;
          }

          .buttons.verify {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row-reverse;
            justify-content: space-between;
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
          .b2c-signup .intro,
          .b2c-signup .heading + .buttons,
          .divider,
          .heading {
            display: none !important;
          }

          #continue {
            margin-bottom: 1rem;
          }

          #container {
            position: absolute;
            bottom: 360px;
            width: Calc(100% - 40px);
          }

          .extension_termsOfUseContentWrapper {
            border-top: 1px solid #3d247f;
            margin-bottom: 35px;
          }

          .extension_termsOfUseContentWrapper .textarea a {
            color: #fff;
          }

          .extension_termsOfUseContentWrapper + p,
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

          input[type="checkbox"] {
            width: initial !important;
            margin: 0;
          }

          input[type="checkbox"] + label {
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

          .b2c-signup #attributeList li.TextBox:nth-child(5) {
            margin-bottom: 420px;
          }

          .b2c-sociallogin #attributeList ul {
            display: flex;
            flex-wrap: wrap;
          }

          #email_ver_input_label,
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

          #attributeList
            > ul
            > li:not(:first-child):not(:nth-child(2)):not(
              .CheckboxMultiSelect
            ) {
            margin-top: 0.65rem;
          }

          #attributeList + .buttons {
            border-top: none;
            flex-wrap: wrap;
          }

          input::-webkit-input-placeholder {
            color: #fff;
          }

          ::-webkit-input-placeholder {
            color: #fff;
          }

          :-moz-placeholder {
            color: #fff;
          }

          ::-moz-placeholder {
            color: #fff;
          }

          :-ms-input-placeholder {
            color: #fff;
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
            .buttons #email_ver_but_verify {
              margin-bottom: 20px;
            }

            .buttons #email_ver_but_verify,
            .buttons #email_ver_but_resend {
              width: 100% !important;
            }
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
      </style>
    </div>
  );
}
