import { ElementType } from "./elementType";

export class BaseHtmlElement {
    public type: ElementType

    constructor(type: ElementType){
        this.type = type
    }
}