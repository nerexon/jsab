"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlDocument = void 0;
const baseDocument_1 = require("./baseDocument");
const headElement_1 = require("../element/headElement");
const bodyElement_1 = require("../element/bodyElement");
const titleElement_1 = require("../element/titleElement");
class HtmlDocument extends baseDocument_1.BaseDocument {
    head;
    body;
    constructor(name) {
        super(name);
        this.head = new headElement_1.HeadElement();
        this.body = new bodyElement_1.BodyElement();
    }
    setTitle(title) {
        this.head.addElement(new titleElement_1.TitleElement()
            .setTitle(title));
        return this;
    }
    addElement(element) {
        this.body.addElement(element);
        return this;
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
