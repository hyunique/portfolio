const body = document.querySelector("body");
// Custom cursor
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

// Theme toggle button event
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

// Auto scroll
const scrollTo = document.querySelector(".arrow");
const homeSection = document.querySelector(".hero");
const aboutSection = document.querySelector(".about-section");
const portfolioSection = document.querySelector(".projects-section");
const contactSection = document.querySelector(".contact-section");

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

// Hamburger dropdown
const dropIcon = document.querySelector(".dropdown-icon");
dropIcon.addEventListener("click", showNav);
function showNav() {
  console.log("ham");
  navList.classList.toggle("hamburger");
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navList.classList.contains("hamburger")) {
      navList.classList.remove("hamburger");
    }
  });
});

// Hiding nav bar on down scroll
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

// Observer section revealing
const allSections = document.querySelectorAll(".section");

function revealSection(entries, Observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  Observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// email copy
const emailBtn = document.querySelector(".emailBtn");
const tooltip = document.querySelector(".tooltiptext");
emailBtn.addEventListener("click", myFunction);
emailBtn.addEventListener("mouseout", outFunc);
function myFunction() {
  // var copyText = document.getElementById("myInput");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText("kunstvanelena@gmail.com");

  tooltip.innerHTML = "Copied!";
  console.log("Copied!");
}

function outFunc() {
  const tooltip = document.querySelector(".tooltiptext");
  tooltip.innerHTML = "Copy email";
}

// Landing header animation
// let i = 0;
// function typeWriter() {
//   const heroSub = document.querySelector(".hero-subtitle");
//   const txt = "Frontend Developer"; /* The text */
//   let speed = 170;
//   if (i < txt.length) {
//     heroSub.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// window.addEventListener("load", typeWriter);

// Theme toggle button event
// const themeBtn = document.querySelector(".theme-btn");
// const darkmodeBtn = document.querySelector(".dark");
// const lightmodeBtn = document.querySelector(".light");
// darkmodeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("darkmode");
//   toggleThemeBtn();
// });
// lightmodeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("darkmode");
//   toggleThemeBtn();
// });
// function toggleThemeBtn() {
//   if (!body.classList.contains("darkmode")) {
//     darkmodeBtn.style.visibility = "visible";
//     lightmodeBtn.style.visibility = "hidden";
//   } else {
//     darkmodeBtn.style.visibility = "hidden";
//     lightmodeBtn.style.visibility = "visible";
//   }
