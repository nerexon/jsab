"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyElement = void 0;
const baseContainerElement_1 = require("./baseContainerElement");
const elementType_1 = require("./elementType");
class BodyElement extends baseContainerElement_1.BaseContainerElement {
    constructor() {
        super(elementType_1.ElementType.body);
    }
    build() {
        return `<body>\n${this.children.map(child => child.build()).join('\n')}\n</body>`;
    }
}
exports.BodyElement = BodyElement;
