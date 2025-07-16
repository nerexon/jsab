import { BaseHtmlElement } from "./baseHtmlElement";
import { BaseTextFormattingElement } from "./baseTextFormattingElement";
import { ElementType } from "./elementType";

export abstract class BaseTextElement extends BaseHtmlElement {
    protected children: (BaseTextFormattingElement | string)[];

    constructor(type: ElementType) {
        super(type);
        this.children = [];
    }

    public addText(child: BaseTextFormattingElement | string) {
        this.children.push(child);
        return this
    }

    public abstract build(): string;
}
