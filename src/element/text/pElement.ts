import { BaseTextElement } from "../baseTextElement";
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class PElement extends BaseTextElement {
    constructor(){
        super(ElementType.p);
    }

    build(){
        return `<p>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</p>`;
    }
}