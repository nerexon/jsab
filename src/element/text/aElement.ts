import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class AElement extends BaseTextFormattingElement {
    constructor(){
        super(ElementType.a);
    }

    build(){
        return `<a${this.buildAttributes()}>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</a>`;
    }
}