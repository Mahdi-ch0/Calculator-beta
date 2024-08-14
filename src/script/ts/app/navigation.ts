export class Navigation {
    navigationItems = document.querySelector(".menu") as HTMLDivElement;
    showNavigation(): void {
        this.navigationItems.style.display = "ruby";
    }

    closeNavigation(): void {
        this.navigationItems.style.display = "none";
    }
}
