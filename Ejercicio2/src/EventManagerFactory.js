import EventManager from "./EventManager";
import Event from "./Event";

export default class EventManagerFactory {
  static create(events, types) {
    // implement your code here...
    const eventManager = events.map((ev) => {
      let currentEvent = new Event(ev.type, ev.message);
      if (types.indexOf(currentEvent.type) > -1) {
        console.log(`> At second ${ev.second}: ${currentEvent.eventAsString}`);
      }
      return currentEvent;
    });

    return new EventManager();
  }
}
