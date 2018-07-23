import Ticket from "./Ticket";
import Tickets from "./Tickets";

let stringsArray: string[] = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'Boston|126.20|departed',
    'New York City|95.99|sold'
];

let ticketsArray: Ticket[] = [];

//criterias
let PRICE_CRITERIA = 'price';
let DESTINATION_CRITERIA = 'destination';
let STATUS_CRITERIA = 'status';
let criteriaParam;

let SEPARATOR = '|';
for (let entry of stringsArray) {
    let data = entry.split(SEPARATOR);
    ticketsArray.push(new Ticket(data[0], Number(data[1]), data[2]));
}

function compare(a, b) {
    let firstArg;
    let secondArg;

    if (criteriaParam === DESTINATION_CRITERIA) {
        firstArg = a.destination;
        secondArg = b.destination;
    } else if (criteriaParam === STATUS_CRITERIA) {
        firstArg = a.status;
        secondArg = b.status;
    } else if (criteriaParam === PRICE_CRITERIA) {
        firstArg = a.price;
        secondArg = b.price;
    }

    if (firstArg > secondArg) return 1;
    if (firstArg < secondArg) return -1;

    return 0;
}

criteriaParam = PRICE_CRITERIA;
let priceSeed = new Tickets(ticketsArray, PRICE_CRITERIA);
console.log('_________________by price______________________')
console.log(priceSeed.tickets.sort(compare))

criteriaParam = DESTINATION_CRITERIA;
let destinationSeed = new Tickets(ticketsArray, DESTINATION_CRITERIA);
console.log('_________________by destination______________________')
console.log(destinationSeed.tickets.sort(compare))

criteriaParam = STATUS_CRITERIA;
let statusSeed = new Tickets(ticketsArray, STATUS_CRITERIA);
console.log('_________________by status______________________')
console.log(statusSeed.tickets.sort(compare))
