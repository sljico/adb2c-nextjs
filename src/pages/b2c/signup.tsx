import LoginLayout from "@/layouts/LoginLayouts";
import { Head } from "next/document";
import Script from "next/script";
export { getServerSideProps } from "./login";

export default function Login() {
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
              <label htmlFor="extension_termsOfUseContent">
                Terms and Conditions
              </label>

              <textarea id="extension_termsOfUseContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                repellendus rerum odit, nam, voluptatibus voluptas fugit ut
                quaerat repellat eum odio quia esse fugiat magni sapiente hic
                consequuntur quae possimus. Doloribus est repellendus voluptate
                esse itaque quos quis voluptas atque natus ullam vel dolorum
                laboriosam et dignissimos, harum, minima laudantium! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Illo
                assumenda recusandae in molestiae quos. Quos porro excepturi
                officiis corrupti ullam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aperiam numquam, et vel facilis nesciunt
                repellat voluptatem laboriosam fuga excepturi. Architecto dicta
                vero laboriosam voluptatum tempora saepe ducimus? Recusandae
                veniam non aut eveniet officiis corporis quidem? Deleniti
                itaque, facere, sint quaerat totam animi nulla quas
                necessitatibus vero fugiat excepturi non. Iste ut voluptatum
                temporibus blanditiis? Quia odit optio porro similique deleniti
                itaque voluptates, illum dolorum assumenda odio, officia amet
                tempora? Quod cupiditate est nisi blanditiis atque, beatae
                officia modi provident inventore esse corporis vitae alias,
                fugiat, cumque architecto saepe laboriosam vero? Facere magni
                vitae vero voluptas, quaerat nisi officiis mollitia ipsum hic
                possimus doloremque similique vel aperiam, laboriosam excepturi
                minus doloribus odit laudantium ipsa distinctio a atque odio
                minima. Quod ad quisquam odit fuga, praesentium eligendi.
                Officia illo beatae, odio eveniet eius aperiam facere eos
                dolorem praesentium reprehenderit aliquam nam accusantium hic?
                Non quidem aliquam hic earum beatae consequatur possimus,
                pariatur quos sapiente commodi provident, repellendus nesciunt
                fugiat odio itaque! Tempore, eum commodi pariatur fuga molestias
                repudiandae fugiat explicabo ad hic similique quasi esse
                officiis velit voluptatum cumque, autem, dolorem debitis. Quia,
                praesentium reiciendis aut numquam non cumque animi soluta
                quisquam odit modi esse facere, enim repellat asperiores
                quibusdam illum obcaecati?
                <br />
                <br />
                <a href="#">Link</a>
              </textarea>
            </div>
          </li>
        </div>
      </LoginLayout>
      <Script id="signup-script" strategy="beforeInteractive">
        {`  
            setTimeout(() => {
              const test = document.getElementById('extension_termsOfUseContentWrapper');
              const checkbox = document.querySelector('ul > li.CheckboxMultiSelect');
              const p = document.createElement('p');
              const paraTextNode = document.createTextNode('HIPPA Authroization');
              p.appendChild(paraTextNode);
              console.log('timeout ', test, checkbox)
              detach(test);
              insertBefore(test, checkbox);
              insertBefore(p, checkbox);
            }, 1500);

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
