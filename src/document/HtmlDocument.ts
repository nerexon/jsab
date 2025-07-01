import { BaseDocument } from "./baseDocument";

export class HtmlDocument extends BaseDocument {
    public title: string;

    constructor(name: string) {
        super(name);
        this.title = name;
    }

    setTitle(title: string){
        this.title = title;
        return this;
    }

    build(): string {
        return `<!DOCTYPE html>
<html>
<head>
  <title>${this.title}</title>
</head>
<body>
  <h1>${this.name}</h1>
</body>
</html>`;
    }
}