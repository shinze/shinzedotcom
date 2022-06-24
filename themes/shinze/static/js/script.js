const themeSwitcher = document.getElementById("theme-switcher");
const root = document.querySelector("html");
const sun = document.getElementById("theme-switcher__icon--sun");
const moon = document.getElementById("theme-switcher__icon--moon");

// toggleHidden(sun);

themeSwitcher.addEventListener("click", function toggleTheme () {
  root.classList.toggle("dark-theme");
  // toggleHidden(moon);
  // toggleHidden(sun);
  /* Todo : gérer les cookies */
});


function toggleHidden(element){
  const el = element;
  if (element.hasAttribute("hidden")) {
    el.removeAttribute("hidden")
  } else {
    el.setAttribute("hidden", "")
  }
}

