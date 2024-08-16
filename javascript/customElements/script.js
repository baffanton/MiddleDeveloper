class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener("click", () => alert("Hello World!"));
  }
}

customElements.define("hello-button", HelloButton, { extends: "button" });
