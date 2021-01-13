import { r as registerInstance, h } from './index-df355ffd.js';

const myComponentCss = ".grid{display:grid;grid-template-columns:repeat(4, 300px);grid-gap:20px;width:1260px;margin-left:auto;margin-right:auto}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
