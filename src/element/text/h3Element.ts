import { BaseTextElement } from "../baseTextElement";
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class H3Element extends BaseTextElement {
    constructor(){
        super(ElementType.h3);
    }

    build(){
        return `<h3${this.buildAttributes()}>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</h3>`;
    }
}