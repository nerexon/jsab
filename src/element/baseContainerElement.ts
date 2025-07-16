import { BaseHtmlElement } from "./baseHtmlElement";
import { ElementType } from "./elementType";

export abstract class BaseContainerElement extends BaseHtmlElement {
    protected children: BaseHtmlElement[];

    constructor(type: ElementType){
        super(type);
        this.children = new Array;
    }

    addElement(element: BaseHtmlElement): this{
        this.children.push(element);
        return this;
    }

    getElements(): ReadonlyArray<BaseHtmlElement> {
        return this.children;
    }
}