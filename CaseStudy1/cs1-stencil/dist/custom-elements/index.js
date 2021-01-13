import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const cardComponentCss = ".card{width:300px;color:#000000;display:grid;font-size:20px;box-shadow:0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.11);background:#FFFFFF;font-family:Georgia;grid-template-rows:174px 176px;grid-template-columns:1fr}.image{width:100%;height:100%;object-fit:cover}.text{margin:8px 16px;overflow:hidden;max-height:160px;line-height:28px}";

const CardComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("div", { class: "card" }, h("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkvvDuPwAFgQLKpGTOcgAAAABJRU5ErkJggg==", alt: "", width: "300", height: "174" }), h("p", { class: "text" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"), h("form", null, h("label", null, "First name:"), h("br", null), h("input", { type: "text", id: "fname", name: "fname" }), h("br", null), h("label", null, "Last name:"), h("br", null), h("input", { type: "text", id: "lname", name: "lname" }), h("br", null), h("button", { type: "reset" }, "Reset"), h("button", { type: "submit" }, "Send"))));
  }
  static get style() { return cardComponentCss; }
};

const myComponentCss = ".grid{display:grid;grid-template-columns:repeat(4, 300px);grid-gap:20px;width:1260px;margin-left:auto;margin-right:auto}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.cards = [];
  }
  componentWillLoad() {
    for (let i = 0; i < 40; i++) {
      this.cards.push(h("card-component", null));
    }
  }
  render() {
    return (h("div", { class: "grid" }, this.cards.map((card) => card)));
  }
  static get style() { return myComponentCss; }
};

const CardComponent$1 = /*@__PURE__*/proxyCustomElement(CardComponent, [1,"card-component"]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"cards":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      CardComponent$1,
  MyComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { CardComponent$1 as CardComponent, MyComponent$1 as MyComponent, defineCustomElements };
