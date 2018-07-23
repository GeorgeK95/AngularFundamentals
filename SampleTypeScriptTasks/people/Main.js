"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Junior_1 = require("./Junior");
var Senior_1 = require("./Senior");
var Manager_1 = require("./Manager");
var junior = new Junior_1.Junior("Pesho", 15);
var senior = new Senior_1.Senior("Gosho", 16);
var manager = new Manager_1.Manager("Mariya", 17);
junior.salary = 1;
junior.work();
junior.collectSalary();
console.log('_____________________________________________');
senior.salary = 2;
for (var i = 1; i <= 3; i++)
    senior.work();
senior.collectSalary();
console.log('_____________________________________________');
manager.salary = 2, manager.dividend = 1;
for (var i = 1; i <= 2; i++)
    manager.work();
manager.collectSalary();
