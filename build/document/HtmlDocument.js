"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlDocument = void 0;
const baseDocument_1 = require("./baseDocument");
class HtmlDocument extends baseDocument_1.BaseDocument {
    build() {
        return `<!DOCTYPE html>
<html>
<head>
  <title>${this.name}</title>
</head>
<body>
  <h1>${this.name}</h1>
</body>
</html>`;
    }
}
exports.HtmlDocument = HtmlDocument;
