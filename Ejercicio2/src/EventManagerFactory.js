import EventManager from "./EventManager";
import Event from "./Event";

export default class EventManagerFactory {
  static create(events, types) {
    // implement your code here...
    const eventManager = events
      .filter((ev) => types.indexOf(ev.type) > -1)
      .map((ev) => {
        return new Event(ev.second, ev.type, ev.message);
      });

    return new EventManager(eventManager);
  }
}
