console.log("da");

waitForElm("#extension_termsOfUseContentWrapper").then((el) => {
  const checkbox = document.querySelector("ul > li.CheckboxMultiSelect");
  const p = document.createElement("p");
  const paraTextNode = document.createTextNode("HIPPA authorization");
  p.appendChild(paraTextNode);

  detach(el);
  insertBefore(el, checkbox);
  insertBefore(p, checkbox);
});

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function detach(el) {
  return el?.parentNode.removeChild(el);
}

function insertBefore(newNode, referenceNode) {
  referenceNode?.parentNode.insertBefore(newNode, referenceNode);
}
