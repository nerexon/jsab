import { ElementType } from "./elementType";

export class BaseElement {
    public type: ElementType

    constructor(type: ElementType){
        this.type = type
    }
}