export type Event = {
    name: string;
    time: number;
};

export class EventNode {
    name: string;

    eventName: string;

    sender: string;

    time: Date;

    constructor(eventRecord: Event) {
        this.name = eventRecord.name;
        this.time = new Date(eventRecord.time * 1000);
    }
}
