import { BaseContainerElement } from "../baseContainerElement";
import { ElementType } from "../elementType";

export class HeaderElement extends BaseContainerElement {
    constructor(){
        super(ElementType.header);
    }

    build(){
        return `<header${this.buildAttributes()}>${this.children.map(child => (child as any).build()).join("\n")}\n</header>`;
    }
}