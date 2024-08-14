import { Navigation } from "../app/navigation.js";

export class Inital {
    statusBarTime = document.querySelector("[time]") as HTMLParagraphElement;
    time(): void {
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
})
