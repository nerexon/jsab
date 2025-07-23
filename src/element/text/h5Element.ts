import { BaseTextElement } from "../baseTextElement";
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class H5Element extends BaseTextElement {
    constructor(){
        super(ElementType.h5);
    }

    build(){
        return `<h5${this.buildAttributes()}>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</h5>`;
    }
}