export default class EventManager {
  constructor(events) {
    this.remainEvents = events;
  }

  run() {
    // implement your code here...
    const timer = setInterval(() => {
      console.log(this.remainEvents[0].eventAsString);
      this.remainEvents.shift();
      if (this.remainEvents.length === 0) {
        clearInterval(timer);
      }
    }, 1000);

    // console.log("this", this);
    console.log("RUNNING");
  }
}
