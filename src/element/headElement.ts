import { BaseElement } from "./baseElement";
import { BaseContainerElement } from "./baseContainerElement";
import { ElementType } from "./elementType";

export class HeadElement extends BaseContainerElement {
    constructor(){
        super(ElementType.head);
    }

    build(): string {
        return `<head>\n${this.children.map(child => (child as any).build()).join('\n')}\n</head>`;
    }
}