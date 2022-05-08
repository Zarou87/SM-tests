export default class Event {
  // implement your code here...
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }

  get eventAsString() {
    return `{type: "${this.type}", message: "${this.type}"}`;
  }
}
