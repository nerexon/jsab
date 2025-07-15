import { BaseElement } from "./baseElement";
import { ElementType } from "./elementType";

export class BaseContainerElement extends BaseElement {
    protected childrens: BaseElement[] = [];

    constructor(type: ElementType){
        super(type);
    }

    addElement(element: BaseElement){
        this.childrens.push(element);
        return this;
    }
}