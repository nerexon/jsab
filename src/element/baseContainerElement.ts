import { BaseHtmlElement } from "./baseHtmlElement";
import { ElementType } from "./elementType";

export abstract class BaseContainerElement extends BaseHtmlElement {
    protected childrens: BaseHtmlElement[];

    constructor(type: ElementType){
        super(type);
        this.childrens = new Array;
    }

    addElement(element: BaseHtmlElement): this{
        this.childrens.push(element);
        return this;
    }

    getElements(): ReadonlyArray<BaseHtmlElement> {
        return this.childrens;
    }
}