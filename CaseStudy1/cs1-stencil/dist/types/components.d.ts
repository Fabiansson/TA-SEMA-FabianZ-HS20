/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface CardComponent {
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLCardComponentElement extends Components.CardComponent, HTMLStencilElement {
    }
    var HTMLCardComponentElement: {
        prototype: HTMLCardComponentElement;
        new (): HTMLCardComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "card-component": HTMLCardComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CardComponent {
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "card-component": CardComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "card-component": LocalJSX.CardComponent & JSXBase.HTMLAttributes<HTMLCardComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
