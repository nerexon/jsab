"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleElement = void 0;
const baseElement_1 = require("./baseElement");
const elementType_1 = require("./elementType");
class TitleElement extends baseElement_1.BaseElement {
    title;
    constructor() {
        super(elementType_1.ElementType.title);
        this.title = "";
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    build() {
        return `<title>${this.title || "HTML5 page"}</title>`;
    }
}
exports.TitleElement = TitleElement;
