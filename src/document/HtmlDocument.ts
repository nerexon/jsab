import { BaseDocument } from "./baseDocument";

export class HtmlDocument extends BaseDocument {
    build(): string {
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