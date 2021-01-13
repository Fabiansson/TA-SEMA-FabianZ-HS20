import { r as registerInstance, h } from './index-df355ffd.js';

const cardComponentCss = ".card{width:300px;color:#000000;display:grid;font-size:20px;box-shadow:0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.11);background:#FFFFFF;font-family:Georgia;grid-template-rows:174px 176px;grid-template-columns:1fr}.image{width:100%;height:100%;object-fit:cover}.text{margin:8px 16px;overflow:hidden;max-height:160px;line-height:28px}";

const CardComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "card" }, h("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkvvDuPwAFgQLKpGTOcgAAAABJRU5ErkJggg==", alt: "", width: "300", height: "174" }), h("p", { class: "text" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"), h("form", null, h("label", null, "First name:"), h("br", null), h("input", { type: "text", id: "fname", name: "fname" }), h("br", null), h("label", null, "Last name:"), h("br", null), h("input", { type: "text", id: "lname", name: "lname" }), h("br", null), h("button", { type: "reset" }, "Reset"), h("button", { type: "submit" }, "Send"))));
  }
};
CardComponent.style = cardComponentCss;

export { CardComponent as card_component };
