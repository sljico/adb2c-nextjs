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
                <div className="card-header">
                  <img
                    src='<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 280 60" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="60" fill="#fff"/>
<path d="m44.742 45.74c2.8876 0 5.4734-1.429 6.5939-3.5074v2.4118c0 0.2942 0.2374 0.5327 0.5301 0.5327h5.4906c0.2927 0 0.5301-0.2385 0.5301-0.5327v-19.806c0-0.2942-0.2374-0.5326-0.5301-0.5326h-5.4906c-0.2927 0-0.5301 0.2384-0.5301 0.5326v2.4551c-1.1205-2.1217-3.4909-3.5506-6.5077-3.5506-6.0336 0-9.8692 4.7631-9.8692 10.998 0 6.2787 3.5771 10.998 9.783 10.998zm1.8963-5.4993c-3.0599 0-4.9562-2.3382-4.9562-5.4992s1.8963-5.4559 4.9562-5.4559c3.2754 0 4.9562 2.4681 4.9562 5.4559 0 3.0311-1.6808 5.4992-4.9562 5.4992z" fill="#7848FF"/>
<path d="m66.316 45.177c0.2927 0 0.5301-0.2385 0.5301-0.5327v-7.5213c0-4.6332 1.8962-6.9715 5.4733-6.9715 0.5849 0 0.95 0.0221 1.3935 0.0663 0.3145 0.0313 0.589-0.214 0.589-0.5315v-5.1378c0-0.2444-0.165-0.4609-0.4048-0.5023-0.3676-0.0635-0.7509-0.0867-1.3191-0.0867-2.5427 0-4.9993 1.6021-5.7319 4.7198v-3.8408c0-0.2942-0.2374-0.5326-0.5301-0.5326h-5.5337c-0.2928 0-0.5301 0.2384-0.5301 0.5326v19.806c0 0.2942 0.2373 0.5327 0.5301 0.5327h5.5337z" fill="#7848FF"/>
<path d="m96.987 33.659c0-5.889-4.3959-9.9159-10.86-9.9159-6.7663 0-11.205 4.1568-11.205 10.998 0 6.9715 4.3528 10.998 11.421 10.998 5.2385 0 9.2723-2.4601 10.219-6.2306 0.0797-0.3174-0.1703-0.611-0.4961-0.611h-5.4961c-0.2113 0-0.3984 0.1288-0.5049 0.3121-0.626 1.0776-1.8666 1.5499-3.7219 1.5499-2.9306 0-4.7407-1.4723-4.87-4.2002h14.865c0.2717 0 0.5004-0.2055 0.528-0.477 0.09-0.8888 0.1216-1.498 0.1216-2.4242zm-15.515-1.2124c0.0431-2.5548 1.767-4.2435 4.6114-4.2435 2.8013 0 4.3528 1.4722 4.3959 4.2435h-9.0073z" fill="#7848FF"/>
<path d="m155.92 45.715c7.111 0 11.507-4.6333 11.507-10.998 0-6.3653-4.396-10.998-11.507-10.998-7.154 0-11.55 4.6332-11.55 10.998 0 6.3652 4.396 10.998 11.55 10.998zm0-5.5859c-3.146 0-4.956-2.2516-4.956-5.4126s1.81-5.4126 4.956-5.4126c3.103 0 4.956 2.2516 4.956 5.4126s-1.853 5.4126-4.956 5.4126z" fill="#7848FF"/>
<path d="m176.47 45.694c3.146 0 5.301-1.3423 6.465-3.5506v2.4551c0 0.2942 0.237 0.5326 0.53 0.5326h5.49c0.293 0 0.53-0.2384 0.53-0.5326v-19.806c0-0.2942-0.237-0.5327-0.53-0.5327h-5.49c-0.293 0-0.53 0.2385-0.53 0.5327v10.682c0 2.8146-1.207 4.6332-4.008 4.6332-2.5 0-3.448-1.5588-3.448-4.4167v-10.899c0-0.2942-0.238-0.5327-0.53-0.5327h-5.62c-0.293 0-0.53 0.2385-0.53 0.5327v12.371c0 5.4127 2.672 8.5303 7.671 8.5303z" fill="#7848FF"/>
<path d="m203.88 40.218c-1.638 0-2.888-0.4763-2.888-3.5507v-6.3925c0-0.2958 0.239-0.5356 0.533-0.5356h3.635c0.292 0 0.53-0.2385 0.53-0.5327v-4.1741c0-0.2942-0.238-0.5327-0.53-0.5327h-3.635c-0.294 0-0.533-0.2398-0.533-0.5356v-5.1238c0-0.2941-0.237-0.5326-0.53-0.5326h-5.534c-0.292 0-0.53 0.2385-0.53 0.5326v5.1268c0 0.2942-0.237 0.5326-0.53 0.5326h-2.215c-0.293 0-0.53 0.2385-0.53 0.5327v4.1741c0 0.2942 0.237 0.5327 0.53 0.5327h2.215c0.293 0 0.53 0.2384 0.53 0.5326v7.7812c0 6.9714 4.267 7.6642 7.37 7.6642 1.629 0 3.004-0.1278 3.96-0.2736 0.253-0.0387 0.436-0.2599 0.436-0.5173v-4.2241c0-0.3241-0.286-0.5749-0.608-0.5489-0.535 0.0431-1.159 0.0647-1.676 0.0647z" fill="#7848FF"/>
<path d="m109.4 45.127c7.011 0 11.624-3.5755 11.624-9.0858 0-3.954-1.99-6.6882-6.377-8.2866l-5.247-1.9349c-3.121-1.1778-4.342-2.1874-4.342-3.8278 0-1.7667 1.402-2.9025 3.799-2.9025 2.627 0 4.13 1.2234 4.349 3.5567 0.03 0.3206 0.34 0.5656 0.681 0.5097l6.005-0.9863c0.299-0.0491 0.519-0.2915 0.506-0.5737-0.251-5.3282-4.643-7.5961-11.405-7.5961-6.875 0-11.772 3.4493-11.772 8.6231 0 3.8278 2.6808 6.562 6.9322 8.0342l5.699 2.0611c2.85 1.0516 3.845 1.977 3.845 3.7858 0 2.0611-1.538 3.2389-4.252 3.2389-2.998 0-4.91-1.5754-5.151-4.3859-0.027-0.3214-0.339-0.5661-0.68-0.509l-5.9363 0.9924c-0.265 0.0443-0.459 0.2612-0.4513 0.5115 0.191 6.2838 4.5666 8.7752 12.174 8.7752z" fill="#7848FF"/>
<path d="m133.12 45.127c6.008 0 10.01-3.0002 10.77-7.7311 0.05-0.3051-0.194-0.5734-0.504-0.5734h-5.654c-0.238 0-0.443 0.1617-0.522 0.3852-0.55 1.5539-1.796 2.2965-4.047 2.2965-2.863 0-4.599-1.9031-4.599-5.3633s1.736-5.3633 4.599-5.3633c2.259 0 3.506 0.7854 4.053 2.4605 0.075 0.2285 0.282 0.3942 0.523 0.3942h5.649c0.309 0 0.552-0.2674 0.505-0.5722-0.755-4.8585-4.759-7.9053-10.773-7.9053-6.898 0-11.193 4.4117-11.193 10.986s4.295 10.986 11.193 10.986z" fill="#7848FF"/>
<path d="m18.005 45.127c8.4815 0 14.068-4.3317 15.116-10.948 0.0486-0.3065-0.1961-0.5775-0.51-0.5775h-6.3128c-0.2452 0-0.456 0.1686-0.5234 0.4015-0.8941 3.09-3.6453 5.0247-7.7278 5.0247-5.6186 0-8.8536-3.7016-8.8536-9.4644 0-5.7627 3.235-9.4643 8.8536-9.4643 4.0825 0 6.8337 1.9346 7.7278 5.0246 0.0674 0.233 0.2782 0.4016 0.5234 0.4016h6.3128c0.3139 0 0.5586-0.271 0.51-0.5775-1.0489-6.6162-6.635-10.948-15.116-10.948-9.7901 0-16.005 6.5199-16.005 15.564 0 9.0438 6.2145 15.564 16.005 15.564z" fill="#7848FF"/>
<path d="m211.75 23.155v-4.3631h1.556v-1.13h-4.402v1.13h1.548v4.3631h1.298z" fill="#7848FF"/>
<path d="m215.14 23.155v-3.5862l1.282 3.5862h0.967l1.25-3.5626v3.5626h1.249v-5.4931h-1.483l-1.5 3.9001-1.499-3.9001h-1.516v5.4931h1.25z" fill="#7848FF"/>
<path d="m224.15 37.246c0-1.1501 0.105-2.2721 0.316-3.3661 0.224-1.0939 0.568-2.1388 1.031-3.1346s1.045-1.9144 1.746-2.756h1.746c-0.645 0.8696-1.192 1.8093-1.641 2.8191-0.435 1.0098-0.764 2.0547-0.989 3.1347-0.224 1.0799-0.336 2.1739-0.336 3.2819 0 1.0799 0.112 2.1528 0.336 3.2187 0.225 1.066 0.554 2.0898 0.989 3.0716 0.435 0.9958 0.975 1.9355 1.62 2.819h-1.725c-0.701-0.8274-1.283-1.7321-1.746-2.7138-0.463-0.9678-0.807-1.9916-1.031-3.0716-0.211-1.0799-0.316-2.1809-0.316-3.3029zm13.902-1.8093c1.704-0.3366 2.798-1.3253 2.798-3.3239 0-2.3983-1.788-3.8289-4.733-3.8289h-4.923v14.726h5.196c2.924 0 4.692-1.5568 4.692-4.1024 0-2.1038-1.431-3.324-3.03-3.4713zm-2.04-5.028c1.535 0 2.419 0.7363 2.419 2.0196 0 1.2623-0.905 2.0197-2.419 2.0197h-2.399v-4.0393h2.399zm-2.399 10.477v-4.3127h2.756c1.368 0 2.293 0.8415 2.293 2.0827 0 1.4096-0.862 2.23-2.314 2.23h-2.735zm18.865-3.2819c0-2.7559-1.893-4.6493-4.691-4.6493-2.987 0-4.923 2.0196-4.923 5.1542 0 3.1768 1.915 5.1543 5.007 5.1543 2.356 0 4.208-1.2833 4.502-3.1136h-2.314c-0.379 0.7574-1.052 1.115-2.188 1.115-1.662 0-2.672-0.8415-2.735-2.3983h7.279c0.042-0.547 0.063-0.8625 0.063-1.2623zm-7.342-0.4838c0.021-1.3885 0.989-2.3563 2.609-2.3563 1.578 0 2.461 0.8415 2.482 2.3563h-5.091zm13.895 3.9551c-0.905 0-1.431-0.2104-1.431-1.9145v-4.0392h2.251v-1.9145h-2.251v-2.9663h-2.293v2.9663h-1.662v1.9145h1.662v4.5652c0 3.3029 2.062 3.4502 3.177 3.4502 0.673 0 1.346-0.0631 1.704-0.1262v-2.0197c-0.231 0.0421-0.8 0.0842-1.157 0.0842zm7.244 2.1879c1.199 0 2.545-0.589 3.155-1.5778v1.3254h2.273v-9.8037h-2.273v1.3254c-0.61-0.9888-1.788-1.5778-3.092-1.5778-3.051 0-4.881 2.2721-4.881 5.1542 0 2.8822 1.662 5.1543 4.818 5.1543zm0.336-2.0407c-1.788 0-2.861-1.3253-2.861-3.1136 0-1.7882 1.073-3.1136 2.861-3.1136 1.957 0 2.904 1.4306 2.904 3.1136 0 1.6831-0.947 3.1136-2.904 3.1136zm12.03-3.9761c0 1.122-0.112 2.223-0.337 3.3029-0.21 1.08-0.547 2.1038-1.01 3.0716-0.448 0.9817-1.031 1.8864-1.746 2.7138h-1.725c0.645-0.8835 1.185-1.8232 1.62-2.819 0.435-0.9818 0.764-2.0056 0.989-3.0716 0.224-1.0659 0.336-2.1388 0.336-3.2187 0-1.108-0.112-2.202-0.336-3.2819-0.225-1.08-0.554-2.1249-0.989-3.1347s-0.982-1.9495-1.641-2.8191h1.746c0.715 0.8416 1.298 1.7602 1.746 2.756 0.463 0.9958 0.8 2.0407 1.01 3.1346 0.225 1.094 0.337 2.216 0.337 3.3661z" fill="#FF6356"/>
</svg>'
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
    </>
  );
}
