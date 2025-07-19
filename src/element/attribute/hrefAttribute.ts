import { BaseAttribute } from "./baseAttribute";

export class HrefAttribute extends BaseAttribute {
    constructor(){
        super("href");
    }

    public setHref(url: string): this{
        this.setValue(url);
        return this;
    }

    public get href(): string {
        return this.value;
    }
}