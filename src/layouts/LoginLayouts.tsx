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
                <img
                  src="data:image/png;base64,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"
                  alt="logo"
                />
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
