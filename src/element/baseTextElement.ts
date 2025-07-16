import { BaseHtmlElement } from "./baseHtmlElement";
import { BaseTextFormattingElement } from "./baseTextFormattingElement";
import { ElementType } from "./elementType";

export abstract class BaseTextElement extends BaseHtmlElement {
    protected children: (BaseTextFormattingElement | string)[];

    constructor(type: ElementType) {
        super(type);
        this.children = [];
    }

    public addElement(child: BaseTextFormattingElement | string) {
        this.children.push(child);
    }

    public abstract build(): string;
}
