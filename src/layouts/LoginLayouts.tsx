import { Header } from "@/components/Header/Header";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import logo from "../../public/logo.png";

// @ts-ignore
export default function LoginLayout({ children }: any): any {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main id="main" role="main">
          <div className="carescoutB2cLayout">
            <section>
              <div className="card">
                <div className="card-header"></div>
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
              background: url('data:image/svg+xml;utf8, <svg width="280" height="60" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="60" fill="white"/><path d="M44.742 45.7398C47.6296 45.7398 50.2154 44.3108 51.3359 42.2324V44.6442C51.3359 44.9384 51.5733 45.1769 51.866 45.1769H57.3566C57.6493 45.1769 57.8867 44.9384 57.8867 44.6442V24.8384C57.8867 24.5442 57.6493 24.3058 57.3566 24.3058H51.866C51.5733 24.3058 51.3359 24.5442 51.3359 24.8384V27.2935C50.2154 25.1718 47.845 23.7429 44.8282 23.7429C38.7946 23.7429 34.959 28.506 34.959 34.7413C34.959 41.02 38.5361 45.7398 44.742 45.7398ZM46.6383 40.2405C43.5784 40.2405 41.6821 37.9023 41.6821 34.7413C41.6821 31.5803 43.5784 29.2854 46.6383 29.2854C49.9137 29.2854 51.5945 31.7535 51.5945 34.7413C51.5945 37.7724 49.9137 40.2405 46.6383 40.2405Z" fill="#7848FF"/><path d="M66.3159 45.1769C66.6086 45.1769 66.846 44.9384 66.846 44.6442V37.1229C66.846 32.4897 68.7422 30.1514 72.3193 30.1514C72.9042 30.1514 73.2693 30.1735 73.7128 30.2177C74.0273 30.249 74.3018 30.0037 74.3018 29.6862V24.5484C74.3018 24.304 74.1368 24.0875 73.897 24.0461C73.5294 23.9826 73.1461 23.9594 72.5779 23.9594C70.0352 23.9594 67.5786 25.5615 66.846 28.6792V24.8384C66.846 24.5442 66.6086 24.3058 66.3159 24.3058L60.7822 24.3058C60.4894 24.3058 60.2521 24.5442 60.2521 24.8384V44.6442C60.2521 44.9384 60.4894 45.1769 60.7822 45.1769H66.3159Z" fill="#7848FF"/><path d="M96.9868 33.6588C96.9868 27.7698 92.5909 23.7429 86.1263 23.7429C79.36 23.7429 74.921 27.8997 74.921 34.7413C74.921 41.7128 79.2738 45.7398 86.3418 45.7398C91.5803 45.7398 95.6141 43.2797 96.5608 39.5092C96.6405 39.1918 96.3905 38.8982 96.0647 38.8982H90.5686C90.3573 38.8982 90.1702 39.027 90.0637 39.2103C89.4377 40.2879 88.1971 40.7602 86.3418 40.7602C83.4112 40.7602 81.6011 39.2879 81.4718 36.56L96.3372 36.56C96.6089 36.56 96.8376 36.3545 96.8652 36.083C96.9552 35.1942 96.9868 34.585 96.9868 33.6588ZM81.4718 32.4464C81.5149 29.8916 83.2388 28.2029 86.0832 28.2029C88.8845 28.2029 90.436 29.6751 90.4791 32.4464L81.4718 32.4464Z" fill="#7848FF"/><path d="M155.924 45.7148C163.035 45.7148 167.431 41.0815 167.431 34.7163C167.431 28.351 163.035 23.7178 155.924 23.7178C148.77 23.7178 144.374 28.351 144.374 34.7163C144.374 41.0815 148.77 45.7148 155.924 45.7148ZM155.924 40.1289C152.778 40.1289 150.968 37.8773 150.968 34.7163C150.968 31.5553 152.778 29.3037 155.924 29.3037C159.027 29.3037 160.88 31.5553 160.88 34.7163C160.88 37.8773 159.027 40.1289 155.924 40.1289Z" fill="#7848FF"/><path d="M176.468 45.6941C179.614 45.6941 181.769 44.3518 182.933 42.1435V44.5986C182.933 44.8928 183.17 45.1312 183.463 45.1312H188.953C189.246 45.1312 189.483 44.8928 189.483 44.5986V24.7928C189.483 24.4986 189.246 24.2601 188.953 24.2601L183.463 24.2601C183.17 24.2601 182.933 24.4986 182.933 24.7928V35.4751C182.933 38.2897 181.726 40.1083 178.925 40.1083C176.425 40.1083 175.477 38.5495 175.477 35.6916V24.7928C175.477 24.4986 175.239 24.2601 174.947 24.2601H169.327C169.034 24.2601 168.797 24.4986 168.797 24.7928V37.1638C168.797 42.5765 171.469 45.6941 176.468 45.6941Z" fill="#7848FF"/><path d="M203.875 40.2181C202.237 40.2181 200.987 39.7418 200.987 36.6674V30.2749C200.987 29.9791 201.226 29.7393 201.52 29.7393H205.155C205.447 29.7393 205.685 29.5008 205.685 29.2066V25.0325C205.685 24.7383 205.447 24.4998 205.155 24.4998H201.52C201.226 24.4998 200.987 24.26 200.987 23.9642V18.8404C200.987 18.5463 200.75 18.3078 200.457 18.3078L194.923 18.3078C194.631 18.3078 194.393 18.5463 194.393 18.8404V23.9672C194.393 24.2614 194.156 24.4998 193.863 24.4998H191.648C191.355 24.4998 191.118 24.7383 191.118 25.0325V29.2066C191.118 29.5008 191.355 29.7393 191.648 29.7393H193.863C194.156 29.7393 194.393 29.9777 194.393 30.2719V38.0531C194.393 45.0245 198.66 45.7173 201.763 45.7173C203.392 45.7173 204.767 45.5895 205.723 45.4437C205.976 45.405 206.159 45.1838 206.159 44.9264V40.7023C206.159 40.3782 205.873 40.1274 205.551 40.1534C205.016 40.1965 204.392 40.2181 203.875 40.2181Z" fill="#7848FF"/><path d="M109.395 45.1274C116.406 45.1274 121.019 41.5519 121.019 36.0416C121.019 32.0876 119.029 29.3534 114.642 27.755L109.395 25.8201C106.274 24.6423 105.053 23.6327 105.053 21.9923C105.053 20.2256 106.455 19.0898 108.852 19.0898C111.479 19.0898 112.982 20.3132 113.201 22.6465C113.231 22.9671 113.541 23.2121 113.882 23.1562L119.887 22.1699C120.186 22.1208 120.406 21.8784 120.393 21.5962C120.142 16.268 115.75 14.0001 108.988 14.0001C102.113 14.0001 97.2158 17.4494 97.2158 22.6232C97.2158 26.451 99.8966 29.1852 104.148 30.6574L109.847 32.7185C112.697 33.7701 113.692 34.6955 113.692 36.5043C113.692 38.5654 112.154 39.7432 109.44 39.7432C106.442 39.7432 104.53 38.1678 104.289 35.3573C104.262 35.0359 103.95 34.7912 103.609 34.8483L97.6727 35.8407C97.4077 35.885 97.2137 36.1019 97.2214 36.3522C97.4124 42.636 101.788 45.1274 109.395 45.1274Z" fill="#7848FF"/><path d="M133.124 45.1271C139.132 45.1271 143.134 42.1269 143.894 37.396C143.944 37.0909 143.7 36.8226 143.39 36.8226H137.736C137.498 36.8226 137.293 36.9843 137.214 37.2078C136.664 38.7617 135.418 39.5043 133.167 39.5043C130.304 39.5043 128.568 37.6012 128.568 34.141C128.568 30.6808 130.304 28.7777 133.167 28.7777C135.426 28.7777 136.673 29.5631 137.22 31.2382C137.295 31.4667 137.502 31.6324 137.743 31.6324H143.392C143.701 31.6324 143.944 31.365 143.897 31.0602C143.142 26.2017 139.138 23.1549 133.124 23.1549C126.226 23.1549 121.931 27.5666 121.931 34.141C121.931 40.7154 126.226 45.1271 133.124 45.1271Z" fill="#7848FF"/><path d="M18.0046 45.1272C26.4861 45.1272 32.0722 40.7955 33.1211 34.1793C33.1697 33.8728 32.925 33.6018 32.6111 33.6018H26.2983C26.0531 33.6018 25.8423 33.7704 25.7749 34.0033C24.8808 37.0933 22.1296 39.028 18.0471 39.028C12.4285 39.028 9.19354 35.3264 9.19354 29.5636C9.19354 23.8009 12.4285 20.0993 18.0471 20.0993C22.1296 20.0993 24.8808 22.0339 25.7749 25.1239C25.8423 25.3569 26.0531 25.5255 26.2983 25.5255L32.6111 25.5255C32.925 25.5255 33.1697 25.2545 33.1211 24.948C32.0722 18.3318 26.4861 14 18.0046 14C8.21454 14 2 20.5199 2 29.5636C2 38.6074 8.21454 45.1272 18.0046 45.1272Z" fill="#7848FF"/><path d="M211.752 23.1548V18.7917H213.308V17.6617H208.906V18.7917H210.454V23.1548H211.752Z" fill="#7848FF"/><path d="M215.144 23.1548V19.5686L216.426 23.1548H217.393L218.643 19.5922V23.1548H219.892V17.6617H218.409L216.909 21.5618L215.41 17.6617H213.894V23.1548H215.144Z" fill="#7848FF"/><path d="M224.154 37.2465C224.154 36.0964 224.259 34.9744 224.47 33.8804C224.694 32.7865 225.038 31.7416 225.501 30.7458C225.964 29.75 226.546 28.8314 227.247 27.9898H228.993C228.348 28.8594 227.801 29.7991 227.352 30.8089C226.917 31.8187 226.588 32.8636 226.363 33.9436C226.139 35.0235 226.027 36.1175 226.027 37.2255C226.027 38.3054 226.139 39.3783 226.363 40.4442C226.588 41.5102 226.917 42.534 227.352 43.5158C227.787 44.5116 228.327 45.4513 228.972 46.3348H227.247C226.546 45.5074 225.964 44.6027 225.501 43.621C225.038 42.6532 224.694 41.6294 224.47 40.5494C224.259 39.4695 224.154 38.3685 224.154 37.2465ZM238.056 35.4372C239.76 35.1006 240.854 34.1119 240.854 32.1133C240.854 29.715 239.066 28.2844 236.121 28.2844H231.198V43.0109H236.394C239.318 43.0109 241.086 41.4541 241.086 38.9085C241.086 36.8047 239.655 35.5845 238.056 35.4372ZM236.016 30.4092C237.551 30.4092 238.435 31.1455 238.435 32.4288C238.435 33.6911 237.53 34.4485 236.016 34.4485H233.617V30.4092H236.016ZM233.617 40.886V36.5733H236.373C237.741 36.5733 238.666 37.4148 238.666 38.656C238.666 40.0656 237.804 40.886 236.352 40.886H233.617ZM252.482 37.6041C252.482 34.8482 250.589 32.9548 247.791 32.9548C244.804 32.9548 242.868 34.9744 242.868 38.109C242.868 41.2858 244.783 43.2633 247.875 43.2633C250.231 43.2633 252.083 41.98 252.377 40.1497H250.063C249.684 40.9071 249.011 41.2647 247.875 41.2647C246.213 41.2647 245.203 40.4232 245.14 38.8664H252.419C252.461 38.3194 252.482 38.0039 252.482 37.6041ZM245.14 37.1203C245.161 35.7318 246.129 34.764 247.749 34.764C249.327 34.764 250.21 35.6055 250.231 37.1203H245.14ZM259.035 41.0754C258.13 41.0754 257.604 40.865 257.604 39.1609V35.1217H259.855V33.2072H257.604V30.2409H255.311V33.2072H253.649V35.1217H255.311V39.6869C255.311 42.9898 257.373 43.1371 258.488 43.1371C259.161 43.1371 259.834 43.074 260.192 43.0109V40.9912C259.961 41.0333 259.392 41.0754 259.035 41.0754ZM266.279 43.2633C267.478 43.2633 268.824 42.6743 269.434 41.6855V43.0109H271.707V33.2072H269.434V34.5326C268.824 33.5438 267.646 32.9548 266.342 32.9548C263.291 32.9548 261.461 35.2269 261.461 38.109C261.461 40.9912 263.123 43.2633 266.279 43.2633ZM266.615 41.2226C264.827 41.2226 263.754 39.8973 263.754 38.109C263.754 36.3208 264.827 34.9954 266.615 34.9954C268.572 34.9954 269.519 36.426 269.519 38.109C269.519 39.7921 268.572 41.2226 266.615 41.2226ZM278.645 37.2465C278.645 38.3685 278.533 39.4695 278.308 40.5494C278.098 41.6294 277.761 42.6532 277.298 43.621C276.85 44.6027 276.267 45.5074 275.552 46.3348H273.827C274.472 45.4513 275.012 44.5116 275.447 43.5158C275.882 42.534 276.211 41.5102 276.436 40.4442C276.66 39.3783 276.772 38.3054 276.772 37.2255C276.772 36.1175 276.66 35.0235 276.436 33.9436C276.211 32.8636 275.882 31.8187 275.447 30.8089C275.012 29.7991 274.465 28.8594 273.806 27.9898H275.552C276.267 28.8314 276.85 29.75 277.298 30.7458C277.761 31.7416 278.098 32.7865 278.308 33.8804C278.533 34.9744 278.645 36.0964 278.645 37.2465Z" fill="#FF6356"/></svg>');
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
    </>
  );
}
