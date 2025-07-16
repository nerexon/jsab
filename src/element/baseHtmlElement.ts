import { ElementType } from "./elementType";

export abstract class BaseHtmlElement {
    public type: ElementType

    constructor(type: ElementType){
        this.type = type
    }

    public abstract build(): string;
}