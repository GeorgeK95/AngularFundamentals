"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Requester_1 = require("./Requester");
var myData = new Requester_1.default('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
