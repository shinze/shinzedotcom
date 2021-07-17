const themeSwitcher = document.getElementById("theme-switcher");
const root = document.querySelector("html");
themeSwitcher.addEventListener("click", function toggleTheme () {
  root.classList.toggle("dark-theme");
});
