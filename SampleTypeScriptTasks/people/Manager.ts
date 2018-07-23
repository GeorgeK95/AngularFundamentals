import Employee from "./Employee";

export class Manager extends Employee {
    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);

        this.dividend = 0;
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly meeting.");
    }

    public getSalary(): number {
        return this.salary + this.dividend;
    }
}