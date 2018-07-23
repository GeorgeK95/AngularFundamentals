"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ticket_1 = require("./Ticket");
var Tickets_1 = require("./Tickets");
var stringsArray = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'Boston|126.20|departed',
    'New York City|95.99|sold'
];
var ticketsArray = [];
//criterias
var PRICE_CRITERIA = 'price';
var DESTINATION_CRITERIA = 'destination';
var STATUS_CRITERIA = 'status';
var criteriaParam;
var SEPARATOR = '|';
for (var _i = 0, stringsArray_1 = stringsArray; _i < stringsArray_1.length; _i++) {
    var entry = stringsArray_1[_i];
    var data = entry.split(SEPARATOR);
    ticketsArray.push(new Ticket_1.default(data[0], Number(data[1]), data[2]));
}
function compare(a, b) {
    var firstArg;
    var secondArg;
    if (criteriaParam === DESTINATION_CRITERIA) {
        firstArg = a.destination;
        secondArg = b.destination;
    }
    else if (criteriaParam === STATUS_CRITERIA) {
        firstArg = a.status;
        secondArg = b.status;
    }
    else if (criteriaParam === PRICE_CRITERIA) {
        firstArg = a.price;
        secondArg = b.price;
    }
    if (firstArg > secondArg)
        return 1;
    if (firstArg < secondArg)
        return -1;
    return 0;
}
criteriaParam = PRICE_CRITERIA;
var priceSeed = new Tickets_1.default(ticketsArray, PRICE_CRITERIA);
console.log('_________________by price______________________');
console.log(priceSeed.tickets.sort(compare));
criteriaParam = DESTINATION_CRITERIA;
var destinationSeed = new Tickets_1.default(ticketsArray, DESTINATION_CRITERIA);
console.log('_________________by destination______________________');
console.log(destinationSeed.tickets.sort(compare));
criteriaParam = STATUS_CRITERIA;
var statusSeed = new Tickets_1.default(ticketsArray, STATUS_CRITERIA);
console.log('_________________by status______________________');
console.log(statusSeed.tickets.sort(compare));
