import { BaseElement } from "./baseElement";
import { ElementType } from "./elementType";

export class BaseContainerElement extends BaseElement {
    public children: BaseElement[] = [];

    constructor(type: ElementType){
        super(type);
    }

    addElement(element: BaseElement){
        this.children.push(element);
        return this;
    }
}