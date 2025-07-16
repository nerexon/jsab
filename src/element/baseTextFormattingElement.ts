import { BaseHtmlElement } from "./baseHtmlElement";
import { ElementType } from "./elementType";

export abstract class BaseTextFormattingElement extends BaseHtmlElement {
    protected children: (BaseTextFormattingElement | string)[];

    constructor(type: ElementType) {
        super(type);
        this.children = [];
    }

    public addElement(child: BaseTextFormattingElement | string) {
        this.children.push(child);
        return this
    }

    public abstract build(): string;
}
