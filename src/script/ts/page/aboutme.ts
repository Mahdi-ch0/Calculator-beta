import { Navigation } from "../app/navigation.js";

const menuIcon = document.querySelector(".menu-icon") as HTMLButtonElement;
const closeIcon = document.querySelector(".close-icon") as HTMLButtonElement;

const changeNavigation = new Navigation();

menuIcon.addEventListener("click", (): void => {
    changeNavigation.showNavigation();
    console.log("pass");
});
closeIcon.addEventListener("click", (): void => {
    changeNavigation.closeNavigation();
});

