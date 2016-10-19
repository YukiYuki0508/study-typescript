"use strict";

interface Human {
    name: string;
    getName(): string;
    setName(name): void;
}

export class Name implements Human {
    name: string;
    private _name: string;

    getName(): string {
        return this._name;
    }

    setName(name: string): void {
        this._name = name;
    }
}
