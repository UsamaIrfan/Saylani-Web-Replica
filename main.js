const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile__nav__container")
const aboutArrow = document.querySelector(".arrow__about")
const aboutSubmenu = document.querySelector(".submenu__about")
const servicesArrow = document.querySelector(".arrow__services")
const servicesSubmenu = document.querySelector(".submenu__services")
const projectsArrow = document.querySelector(".arrow__projects")
const projectsSubmenu = document.querySelector(".submenu__projects")
const donationArrow = document.querySelector(".arrow__donation")
const donationSubmenu = document.querySelector(".submenu__donation")
const intro = document.querySelector(".introduction")

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle("open")
})

aboutArrow.addEventListener('click', () => {
    aboutSubmenu.classList.toggle("open")
})

servicesArrow.addEventListener('click', () => {
    servicesSubmenu.classList.toggle("open")
})

projectsArrow.addEventListener('click', () => {
    projectsSubmenu.classList.toggle("open")
})

donationArrow.addEventListener('click', () => {
    donationSubmenu.classList.toggle("open")
})

function collapseSection(element) {
    let sectionHeight = element.scrollHeight;
    alert(sectionHeight)
}