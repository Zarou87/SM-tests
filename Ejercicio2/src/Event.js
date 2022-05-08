export default class Event {
  // implement your code here...
  constructor(second, type, message) {
    this.second = second;
    this.type = type;
    this.message = message;
  }

  get eventAsString() {
    return `> At second ${this.second}: {type: "${this.type}", message: "${this.message}"}`;
  }
}
