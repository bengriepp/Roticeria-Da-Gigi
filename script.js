const mobileNav = document.getElementById("mobile-button")
const mobileIcon = document.getElementById("mobile-icon")
const mobileMenu = document.getElementById("mobile-menu")
const mediaQuery = window.matchMedia('(min-width: 1250px)')

mobileNav.addEventListener('click', () => {
  mobileIcon.classList.toggle("toggled");
  mobileMenu.classList.toggle("open");
  return false;
})

function handleMobileResize(e) {
  if (e.matches) {
    mobileIcon.classList.remove("toggled");
    mobileMenu.classList.remove("open");
  }
}

mediaQuery.addListener(handleMobileResize);