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
    }
}

export { Application, BaseDocument };