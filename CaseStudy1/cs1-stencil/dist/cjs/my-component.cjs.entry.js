'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5c361e21.js');

const myComponentCss = ".grid{display:grid;grid-template-columns:repeat(4, 300px);grid-gap:20px;width:1260px;margin-left:auto;margin-right:auto}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.cards = [];
  }
  componentWillLoad() {
    for (let i = 0; i < 40; i++) {
      this.cards.push(index.h("card-component", null));
    }
  }
  render() {
    return (index.h("div", { class: "grid" }, this.cards.map((card) => card)));
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
