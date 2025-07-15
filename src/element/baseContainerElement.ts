import { BaseElement } from "./baseElement";
import { ElementType } from "./elementType";

export abstract class BaseContainerElement extends BaseElement {
    protected childrens: BaseElement[];

    constructor(type: ElementType){
        super(type);
        this.childrens = new Array;
    }

    addElement(element: BaseElement): this{
        this.childrens.push(element);
        return this;
    }

    getElements(): ReadonlyArray<BaseElement> {
        return this.childrens;
    }
}