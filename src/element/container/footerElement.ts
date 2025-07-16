import { BaseContainerElement } from "../baseContainerElement";
import { ElementType } from "../elementType";

export class FooterElement extends BaseContainerElement {
    constructor() {
        super(ElementType.footer);
    }

    build() {
        return `<footer>${this.children.map(child => (child as any).build()).join("\n")}\n</footer>`;
    }
}