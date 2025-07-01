import * as fs from 'fs';
import * as path from 'path';
import { BaseDocument } from "./document/baseDocument";
import { HtmlDocument } from "./document/HtmlDocument";

class Application {
    name: string
    htmlDocuments: HtmlDocument[]

    constructor(name: string){
        this.name = name;
        this.htmlDocuments = [];
    }

    addHtmlDocument(document: HtmlDocument){
        this.htmlDocuments.push(document);
        return this;
    }

    build(outputDir: string = 'dist'){
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        this.htmlDocuments.forEach(doc => {
            const content = doc.build();
            const filePath = path.join(outputDir, `${doc.name}.html`);
            fs.writeFileSync(filePath, content);
        });
    }
}

export { Application, BaseDocument, HtmlDocument };