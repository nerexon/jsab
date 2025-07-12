"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlDocument = void 0;
const baseDocument_1 = require("./baseDocument");
const headElement_1 = require("../element/headElement");
const bodyElement_1 = require("../element/bodyElement");
class HtmlDocument extends baseDocument_1.BaseDocument {
    title;
    head;
    body;
    constructor(name) {
        super(name);
        this.title = name;
        this.head = new headElement_1.HeadElement();
        this.body = new bodyElement_1.BodyElement();
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    addElement(element) {
        this.body.addElement(element);
    }
    build() {
        return `<!DOCTYPE html>
<html>
${this.head.build()}
${this.body.build()}
</html>`;
    }
}
exports.HtmlDocument = HtmlDocument;
