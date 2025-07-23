import { BaseTextElement } from "../baseTextElement";
import { BaseTextFormattingElement } from "../baseTextFormattingElement";
import { ElementType } from "../elementType";

export class H2Element extends BaseTextElement {
    constructor(){
        super(ElementType.h2);
    }

    build(){
        return `<h2${this.buildAttributes()}>${this.children.map(child => typeof child === "string" ? (child as string) : (child as BaseTextFormattingElement).build()).join(" ")}</h2>`;
    }
}