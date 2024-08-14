import { Navigation } from "../app/navigation.js";
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
export const initial = new Inital();
const navigation = new Navigation();
window.addEventListener('load', () => {
    navigation.closeNavigation();
});
