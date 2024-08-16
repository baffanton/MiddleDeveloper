const codeContainer = document.getElementById("code-container");
const mutationConfig = { childList: true, subtree: true };
const mockedCode = `Фрагмент кода ниже:
    <pre class="language-javascript"><code> let hello = "world!"; </code></pre>
`;

function onClickHandler() {
  if (!codeContainer) {
    return null;
  }

  codeContainer.innerHTML = mockedCode;
}

const addHighlightToCode = (mutations) => {
  console.log(mutations);
};
const observer = new MutationObserver(addHighlightToCode);
observer.observe(codeContainer, mutationConfig);
