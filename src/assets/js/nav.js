//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const navBarMenuItems = navbarMenu.querySelectorAll("ul li a");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

const openNav = () => {
  hamburgerMenu.setAttribute("aria-expanded", true);
  hamburgerMenu.classList.add("clicked");
  navbarMenu.classList.add("open");
}
const closeNav = () => {
  hamburgerMenu.setAttribute("aria-expanded", false);
    hamburgerMenu.classList.remove("clicked");
    navbarMenu.classList.remove("open");
}

navBarMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeNav();
  })
});

hamburgerMenu.addEventListener('click', () =>  {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
      openNav();
    } else {
      closeNav(); 
    }
});
