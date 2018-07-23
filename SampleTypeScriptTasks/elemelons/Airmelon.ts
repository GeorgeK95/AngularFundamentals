import Melon from "./Melon";

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    public getElementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return super.toString() + `Element Index: ${this.getElementIndex()}`;
    }
}