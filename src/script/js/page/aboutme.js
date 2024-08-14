import { Navigation } from "../app/navigation.js";
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const changeNavigation = new Navigation();
menuIcon.addEventListener("click", () => {
    changeNavigation.showNavigation();
    console.log("pass");
});
closeIcon.addEventListener("click", () => {
    changeNavigation.closeNavigation();
});
