import { BaseAttribute } from "./baseAttribute";

export class IdAttribute extends BaseAttribute {
    constructor(){
        super("id");
    }

    public setId(id: string){
        this.setValue(id)
    }

    public get id(): string{
        return this.value;
    }
}