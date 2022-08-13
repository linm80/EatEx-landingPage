const darkModeButton = document.getElementById("darkModeButton");
const darkModeInput = darkModeButton.children[0];
const heading = document.querySelector("header");
const home = document.getElementById("home");
const footer = document.querySelector(".footer");
const footerTitles = Array.from(
  document.querySelectorAll(".footer h3, .footer h1")
);
const footerParagraphs = Array.from(document.querySelectorAll(".footer p"));
const footerLinks = Array.from(document.querySelectorAll(".footer a"));

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark-mode");
  home.classList.add("home-dark");

  document.getElementById("header").classList.add("dark-mode");
  document
    .getElementsByClassName("content")[0]
    .children[0].classList.add("dark-mode");
  document
    .getElementsByClassName("content")[0]
    .children[1].classList.add("dark-mode");
  heading.classList.add("heading-dark");
  footer.classList.add("background-dark");
  footerTitles.map((title) => title.classList.add("color-dark"));
  footerParagraphs.map((title) => title.classList.add("color-dark"));
  footerLinks.map((title) => title.classList.add("color-dark"));

  darkModeInput.checked = true;
}

darkModeButton.addEventListener("click", function switchDarkMode() {
  if (!darkModeInput.checked) {
    document.body.classList.add("dark-mode");
    home.classList.add("home-dark");

    document.getElementById("header").classList.add("dark-mode");
    document
      .getElementsByClassName("content")[0]
      .children[0].classList.add("dark-mode");
    document
      .getElementsByClassName("content")[0]
      .children[1].classList.add("dark-mode");
    heading.classList.add("heading-dark");
    footer.classList.add("background-dark");
    footerTitles.map((title) => title.classList.add("color-dark"));
    footerParagraphs.map((title) => title.classList.add("color-dark"));
    footerLinks.map((title) => title.classList.add("color-dark"));

    darkModeInput.checked = true;
    localStorage.setItem("dark", "true");
  } else {
    document.body.classList.remove("dark-mode");
    home.classList.remove("home-dark");
    document.getElementById("header").classList.remove("dark-mode");

    document
      .getElementsByClassName("content")[0]
      .children[0].classList.remove("dark-mode");
    document
      .getElementsByClassName("content")[0]
      .children[1].classList.remove("dark-mode");
    heading.classList.remove("heading-dark");
    footer.classList.remove("background-dark");
    footerTitles.map((title) => title.classList.remove("color-dark"));
    footerParagraphs.map((title) => title.classList.remove("color-dark"));
    footerLinks.map((title) => title.classList.remove("color-dark"));

    darkModeInput.checked = false;
    localStorage.setItem("dark", "false");
  }
});

if (localStorage.getItem("phoneImg") === "client") {
  document.getElementById("phoneImg").src = "images/phoneClient.png";
  localStorage.setItem("phoneImg", "liv");
} else {
  document.getElementById("phoneImg").src = "images/phoneLiv.png";
  localStorage.setItem("phoneImg", "client");
}
