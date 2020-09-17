export class EventNode {
  name: string;
  eventName: string;
  sender: string;
  time: Date;

  constructor(eventRecord: any) {
    this.name = eventRecord.name;
    this.time = new Date(eventRecord.time * 1000);
  }
}
