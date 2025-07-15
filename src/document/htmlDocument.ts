import { BaseDocument } from "./baseDocument";
import { BaseElement } from "../element/baseElement";
import { HeadElement } from "../element/headElement";
import { BodyElement } from "../element/bodyElement";
import { TitleElement } from "../element/titleElement";

export class HtmlDocument extends BaseDocument {
    public head: HeadElement;
    public body: BodyElement;

    constructor(name: string) {
        super(name);
        this.head = new HeadElement();
        this.body = new BodyElement();
    }

    setTitle(title: string){
        this.head.addElement(
            new TitleElement()
            .setTitle(title)
        ); 
        return this;
    }

    addElement(element: BaseElement){
        this.body.addElement(element);
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