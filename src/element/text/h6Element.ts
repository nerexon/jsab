import { BaseTextElement } from "../baseTextElement";
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class H6Element extends BaseTextElement {
    constructor(){
        super(ElementType.h6);
    }

    build(){
        return `<h6${this.buildAttributes()}>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</h6>`;
    }
}