import { ElementType } from "./elementType";
import { BaseAttribute } from "./attribute/baseAttribute";

export abstract class BaseHtmlElement {
    public type: ElementType
    protected attributes: BaseAttribute[] = [];

    constructor(type: ElementType){
        this.type = type
    }

    public addAttribute(attribute: BaseAttribute): this {
        this.attributes.push(attribute);
        return this;
    }

    protected buildAttributes(): string {
        if (this.attributes.length === 0) {
            return "";
        }
        return " " + this.attributes.map(attr => attr.build()).join(" ");
    }

    public abstract build(): string;
}
