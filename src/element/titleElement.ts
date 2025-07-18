import { BaseHtmlElement } from "./baseHtmlElement";
import { ElementType } from "./elementType";

export class TitleElement extends BaseHtmlElement {
    public title: string;

    constructor() {
        super(ElementType.title);
        this.title = "";
    }

    setTitle(title: string) {
        this.title = title;
        return this;
    }

    build() {
        return `<title>${this.title || "HTML5 page"}</title>`
    }
}