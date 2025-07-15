import { BaseContainerElement } from "../baseContainerElement";
import { ElementType } from "../elementType";

export class BodyElement extends BaseContainerElement {
    constructor(){
        super(ElementType.body);
    }

    build(): string {
        return `<body>\n${this.childrens.map(child => (child as any).build()).join('\n')}\n</body>`;
    }
}