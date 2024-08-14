export class Inital {
    constructor() {
        this.statusBarTime = document.querySelector("[time]");
    }
    time() {
        const getDate = new Date();
        const hours = String(getDate.getHours());
        const minutes = String(getDate.getMinutes());
        this.statusBarTime.innerHTML = `${hours}:${minutes}`;
    }
}
const initial = new Inital();
const time = initial.time();
