'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c361e21.js');

const cardComponentCss = ".card{width:300px;color:#000000;display:grid;font-size:20px;box-shadow:0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.11);background:#FFFFFF;font-family:Georgia;grid-template-rows:174px 176px;grid-template-columns:1fr}.image{width:100%;height:100%;object-fit:cover}.text{margin:8px 16px;overflow:hidden;max-height:160px;line-height:28px}";

const CardComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "card" }, index.h("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkvvDuPwAFgQLKpGTOcgAAAABJRU5ErkJggg==", alt: "", width: "300", height: "174" }), index.h("p", { class: "text" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"), index.h("form", null, index.h("label", null, "First name:"), index.h("br", null), index.h("input", { type: "text", id: "fname", name: "fname" }), index.h("br", null), index.h("label", null, "Last name:"), index.h("br", null), index.h("input", { type: "text", id: "lname", name: "lname" }), index.h("br", null), index.h("button", { type: "reset" }, "Reset"), index.h("button", { type: "submit" }, "Send"))));
  }
};
CardComponent.style = cardComponentCss;

exports.card_component = CardComponent;
