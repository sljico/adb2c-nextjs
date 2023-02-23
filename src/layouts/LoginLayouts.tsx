import { Header } from "@/components/Header/Header";

// @ts-ignore
export default function LoginLayout({ children }: any): any {
  return (
    <div>
      <main id="main" role="main">
        <div className="carescoutB2cLayout">
          <section>
            <div className="card">
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
            background-color: #fff;
            font-size: inherit;
          }

          main {
            margin: auto;
            max-width: 420px;
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

          .card-body {
            flex: 1 1 auto;
            padding: 5px;
          }

          .intro > p,
          #api h2,
          #api h3 {
            font-weight: 500;
            line-height: 1.25;
            margin-bottom: 1.5rem !important;
            text-align: center;
            font-size: 1.15rem;
            color: #323339;
            margin: 0;
          }

          .carescoutB2cLayout {
            padding: 0 20px;
          }

          #api button {
            background-color: #7848ff;
            color: #fff;
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
            font-size: 1.2rem !important;
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

          #api .options button {
            font-weight: 400;
            // color: #323339;
            // background-color: #fff;
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
            border-top: 1px solid #e9ecef;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
          }

          .create > p {
            color: #9e9e9e;
            display: flex;
            font-size: 1.2rem;
            justify-content: flex-end;
            margin: 0;
          }

          #createAccount {
            margin-left: 0.25rem;
          }

          .attrEntry,
          .entry-item {
            margin-top: 1.5rem;
            position: relative;
          }

          .attrEntry label,
          .entry-item label {
            color: #000;
            letter-spacing: -0.1px;
            font-size: 1.2rem;
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
            color: #495057;
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
            margin-top: 1rem;
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
            border: 1px solid #7848ff;
          }

          #forgotPassword {
            float: right;
            font-size: 0.8rem;
          }

          .error > p {
            color: #f44336;
            font-size: 0.8rem;
            margin: 0;
          }

          .buttons {
            margin-top: 1.5rem;
            display: flex;
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

          .card,
          .card-body {
            position: relative;
          }

          .card,
          button {
            word-wrap: break-word;
          }

          #email_intro,
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

          #extension_termsOfUseContentWrapper {
            border-top: 1px solid #909090;
            margin: 35px 0;
          }

          #extension_termsOfUseContentWrapper label,
          #extension_termsOfUseContentWrapper + p {
            font-weight: 700;
            font-size: 28px;
            color: #333;
          }

          #extension_termsOfUseContentWrapper + p {
            margin: 0;
            padding-bottom: 35px;
            margin-bottom: 31px;
            border-bottom: 1px solid #919191;
          }

          #api ul {
            padding: 0;
            margin: 0;
          }

          #extension_termsOfUseContentWrapper,
          #api ul li {
            list-style-type: none;
          }

          #extension_termsOfUseContent {
            border: none;
            resize: none;
            padding: 0;
            border-radius: 0;
            height: 200px;
            padding-right: 25px;
          }

          #extension_termsOfUseContent:focus-visible {
            outline: none;
          }

          .CheckboxMultiSelect > .attrEntry {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
          }

          input[type="checkbox"] {
            width: initial !important;
            margin: 0;
          }

          input[type="checkbox"] + label {
            flex: 1 1 auto;
          }

          #api #emailVerificationControl_but_verify_code,
          #api .sendButton,
          #api .sendCode,
          #api #cancel {
            background-color: #fff;
            color: #323339;
          }

          #attributeList + .buttons {
            border-top: none;
            flex-wrap: wrap;
          }

          input::-webkit-input-placeholder {
            color: #333;
          }

          ::-webkit-input-placeholder {
            color: #333;
          }

          :-moz-placeholder {
            color: #333;
          }

          ::-moz-placeholder {
            color: #333;
          }

          :-ms-input-placeholder {
            color: #333;
          }

          textarea::-webkit-scrollbar {
            width: 10px;
          }

          textarea::-webkit-scrollbar-track {
            background: #efefef;
          }

          textarea::-webkit-scrollbar-thumb {
            background: #545433;
          }
        `}
      </style>
    </div>
  );
}
