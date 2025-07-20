
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class IElement extends BaseTextFormattingElement {
    constructor(){
        super(ElementType.i);
    }

    build(){
        return `<i${this.buildAttributes()}>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</i>`;
    }
}
