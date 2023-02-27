const navLogo = document.querySelector(`.nav_logo`);
const explore = document.querySelector(".home_explore");
const back_ring = document.querySelector(".home_back-ring");
const moon = document.querySelectorAll(".moon");
const mars = document.querySelectorAll(".mars");
const europa = document.querySelectorAll(".europa");
const titan = document.querySelectorAll(".titan");
const space = [moon, mars, europa, titan];
const commander = document.querySelector(".commander");
const mission = document.querySelector(".mission_specialist");
const pilot = document.querySelector(".pilot");
const flight = document.querySelector(".flight_engineer");
const dots = document.querySelectorAll(".dot");
const page = document.querySelectorAll(".page");
const numberContainer = document.querySelector(".numberCount");
const slider = document.querySelector(".techCarousel");

// -------- NAV LOGO FUNCTIONALITY-------- //
navLogo.addEventListener(`click`, () => {
  location.href = `main.html`;
});
// --------Home-Explore hover-effect--------

function explore_backg() {
  back_ring.style.backgroundColor = "rgba(255, 255, 255, .1)";
}

function explore_backoff() {
  back_ring.style.backgroundColor = "rgba(255, 255, 255, 0)";
}

// -----------Destination minipage functions--------

const g = [
  { moon: moon },
  { mars: mars },
  { europa: europa },
  { titan: titan },
];

function des_minnav_click(key) {
  const h = g.filter((item) => Object.keys(item)[0] === key)[0];
  space.forEach((item) => {
    item.forEach((itm) => (itm.style.display = "none"));
  });
  h[key].forEach((item) => (item.style.display = "flex"));
}

// ------------ CREW-SLIDES -------------

const j = [commander, mission, pilot, flight];

// PAGE MOVE FUNCTIONALITY

const movePage = (num) => {
  j[num].style.display = "flex";
  dots[num].classList.add("active");
};

function bullet_change(p) {
  for (let i = 0; i < j.length; i++) {
    j[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  movePage(p);
}

// --------- TECHNOLOGY FUNCTIONALITIES ------------
let count = 0;
moveCarousel = (count) => {
  slider.style.transform = `translateY(-${508 * count}px)`;
};

moveNumber = (count) => {
  page.forEach((itm) => {
    itm.classList.remove("active");
  });
  page[count].classList.add("active");
};

numberContainer.addEventListener("click", (e) => {
  const event = e.target;
  count = Number(event.dataset.num);
  if (event.classList.contains("page")) {
    moveCarousel(count);
    moveNumber(count);
  }
});

setInterval(() => {
  count += 1;
  if (count === slider.childElementCount) {
    count = 0;
  }
  moveCarousel(count);
  moveNumber(count);
}, 3000);
