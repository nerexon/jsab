
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class BElement extends BaseTextFormattingElement {
    constructor(){
        super(ElementType.b);
    }

    build(){
        return `<b${this.buildAttributes()}>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</b>`;
    }
}
