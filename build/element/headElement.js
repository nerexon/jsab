"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadElement = void 0;
const baseContainerElement_1 = require("./baseContainerElement");
const elementType_1 = require("./elementType");
class HeadElement extends baseContainerElement_1.BaseContainerElement {
    constructor() {
        super(elementType_1.ElementType.head);
    }
    build() {
        return `<head>\n${this.children.map(child => child.build()).join('\n')}\n</head>`;
    }
}
exports.HeadElement = HeadElement;
