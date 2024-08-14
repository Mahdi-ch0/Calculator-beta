export class Inital {
    statusBarTime = document.querySelector("[time]") as HTMLParagraphElement;
    time(): void {
        const getDate = new Date();
        const hours = String(getDate.getHours());
        const minutes = String(getDate.getMinutes());
        this.statusBarTime.innerHTML = `${hours}:${minutes}`;
    }
}

const initial = new Inital();
const time = initial.time();

