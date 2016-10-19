"use strict";

interface Human {
    name: string;

}

export class HumanName implements Human {
    name: string;
    private _name: string;

    get Name(): string {
        return this._name;
    }

    set Name(name: string) {
        this._name = name;
    }
}
