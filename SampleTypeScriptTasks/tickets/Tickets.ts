import Ticket from './Ticket';

class Tickets {
    public tickets: Ticket[];
    public criteria: string;

    constructor(tickets: Ticket[], criteria: string) {
        this.tickets = tickets;
        this.criteria = criteria;
    }
}

export default Tickets;