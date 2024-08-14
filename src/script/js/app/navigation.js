export class Navigation {
    constructor() {
        this.navigationItems = document.querySelector(".menu");
    }
    showNavigation() {
        this.navigationItems.style.display = "ruby";
    }
    closeNavigation() {
        this.navigationItems.style.display = "none";
    }
}
