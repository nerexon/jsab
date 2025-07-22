import { BaseAttribute } from "./baseAttribute";

export class ClassAttribute extends BaseAttribute {
    constructor(){
        super("class");
    }

    public addClass(classname: string){
        this.setValue(this.value.split(" ").concat(classname).join(" "));
    }

    public addClasses(...classesName: (string | string[])[]){
        this.setValue(this.value.split(" ").concat(classesName.flatMap(className => typeof className === "string" ? className.split(" ") : className)).join(" "));
    }

    public get classes(): string[]{
        return this.value.split(" ").filter(Boolean);
    }
}