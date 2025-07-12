import { BaseDocument } from "./baseDocument";
import { BaseElement } from "../element/baseElement";
import { HeadElement } from "../element/headElement";
import { BodyElement } from "../element/bodyElement";

export class HtmlDocument extends BaseDocument {
    public title: string;
    public head: HeadElement;
    public body: BodyElement;

    constructor(name: string) {
        super(name);
        this.title = name;
        this.head = new HeadElement();
        this.body = new BodyElement();
    }

    setTitle(title: string){
        this.title = title;
        return this;
    }

    addElement(element: BaseElement){
        this.body.addElement(element);
    }

    build(): string {
        return `<!DOCTYPE html>
<html>
${this.head.build()}
${this.body.build()}
</html>`;
    }
}