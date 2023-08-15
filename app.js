const cursor = document.querySelector("#cursor");
const cursor2 = document.querySelector("#cursor2");
document.addEventListener("mousemove", function (e) {
  const x = e.pageX - 10;
  const y = e.pageY - 10;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  cursor2.style.left = x + 20 + "px";
  cursor2.style.top = y + 20 + "px";
});

const body = document.querySelector("body");
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  toggleThemeBtn();
});

function toggleThemeBtn() {
  if (themeBtn.innerHTML === "dark_mode") {
    themeBtn.innerHTML = "flare";
  } else {
    themeBtn.innerHTML = "dark_mode";
  }
}

const scrollTo = document.querySelector(".arrow");
const homeSection = document.querySelector(".landing");
const aboutSection = document.querySelector(".about");
const portfolioSection = document.querySelector(".projects-container");
const contactSection = document.querySelector(".contact-container");
// const aboutcoords = aboutSection.getBoundingClientRect();
// const portfoliocoords = portfolioSection.getBoundingClientRect();
// const contactcoords = contactSection.getBoundingClientRect();

scrollTo.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

const navList = document.querySelector(".navList");
const navItems = document.querySelectorAll(".navItem");
navList.addEventListener("click", (e) => {
  const menuName = e.target.textContent;
  switch (menuName) {
    case "About":
      aboutSection.scrollIntoView({ behavior: "smooth" });
      break;
    case "Portfolio":
      portfolioSection.scrollIntoView({ behavior: "smooth" });
      break;
    case "Contact":
      contactSection.scrollIntoView({ behavior: "smooth" });
      break;
    case "Home":
      homeSection.scrollIntoView({ behavior: "smooth" });
      break;
  }
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};

// const liItems = document.querySelectorAll("li");
// liItems.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     cursor.classList.add("hover");
//   });
// });
