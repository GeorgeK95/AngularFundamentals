import Requester from './Requester';

let myData = new Requester('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);