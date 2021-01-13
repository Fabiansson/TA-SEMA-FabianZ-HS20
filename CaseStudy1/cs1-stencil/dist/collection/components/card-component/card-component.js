import { Component, h } from '@stencil/core';
export class CardComponent {
  render() {
    return (h("div", { class: "card" },
      h("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkvvDuPwAFgQLKpGTOcgAAAABJRU5ErkJggg==", alt: "", width: "300", height: "174" }),
      h("p", { class: "text" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),
      h("form", null,
        h("label", null, "First name:"),
        h("br", null),
        h("input", { type: "text", id: "fname", name: "fname" }),
        h("br", null),
        h("label", null, "Last name:"),
        h("br", null),
        h("input", { type: "text", id: "lname", name: "lname" }),
        h("br", null),
        h("button", { type: "reset" }, "Reset"),
        h("button", { type: "submit" }, "Send"))));
  }
  static get is() { return "card-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["card-component.css"]
  }; }
}
