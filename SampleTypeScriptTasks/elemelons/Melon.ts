export default abstract class Melon {
    public weight: number;
    public melonSort: string;
    public name: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.name = this.constructor.name;
    }

    abstract getElementIndex();

    public toString(): string {
        const MELON = "melon";
        const EMPTY = "";

        let element: string = this.name.replace(MELON, EMPTY);

        return `Element: ${element}\nSort: ${this.melonSort}\n`;
    }
}