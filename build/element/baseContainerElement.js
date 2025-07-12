"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseContainerElement = void 0;
const baseElement_1 = require("./baseElement");
class BaseContainerElement extends baseElement_1.BaseElement {
    children = [];
    constructor(type) {
        super(type);
    }
    addElement(element) {
        this.children.push(element);
        return this;
    }
}
exports.BaseContainerElement = BaseContainerElement;
