export abstract class BaseAttribute {
    public name: Readonly<string>;
    private _value: string;

    constructor(name: string) {
        this.name = name;
        this._value = "";
    }

    protected setValue(value: string){
        this._value = value;
    }

    public get value(){
        return this._value;
    }

    public  build(): string {
        return `${this.name}="${this.value}"`;
    }
}