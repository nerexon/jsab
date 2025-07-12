
import { BaseElement } from "./baseElement";
import { ElementType } from "./elementType";

export class HeadElement extends BaseElement {
    public children: BaseElement[] = [];

    constructor(){
        super(ElementType.head);
    }

    addElement(element: BaseElement){
        this.children.push(element);
        return this;
    }

    build(): string {
        return `<head>\n${this.children.map(child => (child as any).build()).join('\n')}\n</head>`;
    }
}