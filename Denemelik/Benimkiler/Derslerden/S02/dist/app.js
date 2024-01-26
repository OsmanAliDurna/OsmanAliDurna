class LMSCalender {
    constructor(events) {
        this.events = events;
    }
    addEvents(event) {
        this.events.push(event);
    }
}
const cohort15 = new LMSCalender(["HTML", "CSS", "JS"]);
