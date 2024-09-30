const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const toggleClass = (element, currentClass) => {
    element.classList.toggle(currentClass);
};

const toggleSideBarVisible = () => {
    toggleClass(sidebar, "sidebar-open");
    toggleClass(overlay, "overlay-open");
}

menu.addEventListener("click", toggleSideBarVisible);
closeIcon.addEventListener("click", toggleSideBarVisible);
overlay.addEventListener("click", toggleSideBarVisible);