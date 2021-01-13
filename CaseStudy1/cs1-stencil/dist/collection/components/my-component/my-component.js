import { Component, h, State } from '@stencil/core';
export class MyComponent {
  constructor() {
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
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get states() { return {
    "cards": {}
  }; }
}
