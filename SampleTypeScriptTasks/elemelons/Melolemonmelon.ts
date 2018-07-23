import {Airmelon} from "./Airmelon";

export class Melolemonmelon extends Airmelon {
    public melons: any;
    public index: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.index = 0;
        this.melons = ['Water', 'Fire', 'Earth', 'Air'];
    }

    public morph(): void {
        this.index++;
    }

    public toString(): string {
        return /*new*/ this.melons[this.index % 4]/*(this.weight, this.melonSort)*/.toString();
    }
}