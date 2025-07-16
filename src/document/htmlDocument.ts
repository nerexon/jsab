import { BaseDocument } from "./baseDocument";
import { BaseHtmlElement } from "../element/baseHtmlElement";
import { HeadElement } from "../element/container/headElement";
import { BodyElement } from "../element/container/bodyElement";
import { TitleElement } from "../element/titleElement";

export class HtmlDocument extends BaseDocument {
    public head: HeadElement;
    public body: BodyElement;

    constructor(name: string) {
        super(name);
        this.head = new HeadElement;
        this.body = new BodyElement;
    }

    setTitle(title: string){
        this.head.addElement(
            new TitleElement()
            .setTitle(title)
        ); 
        return this;
    }

    build(): string {
        return `<!DOCTYPE html>
<html>
${this.head.build()}
${this.body.build()}
</html>`;
    }
}