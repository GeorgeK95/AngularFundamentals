import {Junior} from "./Junior";
import {Senior} from "./Senior";
import {Manager} from "./Manager";

const junior = new Junior("Pesho", 15);
const senior = new Senior("Gosho", 16);
const manager = new Manager("Mariya", 17);

junior.salary = 1;
junior.work();
junior.collectSalary();
console.log('_____________________________________________')
senior.salary = 2;
for (let i = 1; i <= 3; i++) senior.work();
senior.collectSalary();
console.log('_____________________________________________')
manager.salary = 2, manager.dividend = 1;
for (let i = 1; i <= 2; i++) manager.work();
manager.collectSalary();