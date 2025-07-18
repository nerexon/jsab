import { BaseContainerElement } from "../baseContainerElement";
import { ElementType } from "../elementType";

export class MainElement extends BaseContainerElement {
    constructor() {
        super(ElementType.main);
    }

    build() {
        return `<main${this.buildAttributes()}>${this.children.map(child => (child as any).build()).join("\n")}\n</main>`;
    }
}