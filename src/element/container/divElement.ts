import { BaseContainerElement } from "../baseContainerElement";
import { ElementType } from "../elementType";

export class DivElement extends BaseContainerElement {
    constructor(){
        super(ElementType.div);
    }

    build(){
        return `<div${this.buildAttributes()}>${this.children.map(child => (child as any).build()).join("\n")}\n</div>`;
    }
}