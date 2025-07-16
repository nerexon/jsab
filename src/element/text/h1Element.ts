import { BaseTextElement } from "../baseTextElement";
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class H1Element extends BaseTextElement {
    constructor(){
        super(ElementType.h1);
    }

    build(){
        return `<h1>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</h1>`;
    }
}