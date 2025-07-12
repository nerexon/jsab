
import { BaseElement } from "./baseElement";
import { ElementType } from "./elementType";

export class BodyElement extends BaseElement {
    public children: BaseElement[] = [];

    constructor(){
        super(ElementType.body);
    }

    addElement(element: BaseElement){
        this.children.push(element);
        return this;
    }

    build(): string {
        return `<body>\n${this.children.map(child => (child as any).build()).join('\n')}\n</body>`;
    }
}