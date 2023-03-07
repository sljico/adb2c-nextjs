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
                <img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 283 64"><path fill="black" d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"/></svg>' />
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
