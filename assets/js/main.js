// MOBILE NAV TOGGLE
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
}

// HEADER COLOR CHANGE ON SCROLL
const siteHeader = document.querySelector(".site-header");

function updateHeaderState() {
  if (!siteHeader) return;
  if (window.scrollY > 40) {
    siteHeader.classList.add("site-header--scrolled");
  } else {
    siteHeader.classList.remove("site-header--scrolled");
  }
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState);

// MENU TABS
const tabs = document.querySelectorAll(".menu-tab");
const panes = {
  tea: document.getElementById("menu-pane-tea"),
  coffee: document.getElementById("menu-pane-coffee"),
  milkshakes: document.getElementById("menu-pane-milkshakes"),
  coolers: document.getElementById("menu-pane-coolers"),
  lassi: document.getElementById("menu-pane-lassi"),
  milk: document.getElementById("menu-pane-milk"),
  snacks: document.getElementById("menu-pane-snacks"),
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    Object.values(panes).forEach((pane) => {
      pane.classList.remove("active");
    });
    const pane = panes[target];
    if (pane) pane.classList.add("active");
  });
});

// TESTIMONIAL SLIDER
const testimonials = [
  {
    text:
      "Nice place to hang out with friends. Milkshakes and other varieties are great. Small area but best place to enjoy with gang.",
    author: "Mahesh – Kakinada",
  },
  {
    text:
      "Quality of the shakes in this outlet is amazing compared to many other cafés. Great taste with affordable price.",
    author: "Prakash – Vizag",
  },
  {
    text:
      "Perfect evening spot. Hot tea, cold coffee and friendly staff – everything you need after a long day.",
    author: "Sneha – Rajahmundry",
  },
];

const textEl = document.getElementById("testimonial-text");
const authorEl = document.getElementById("testimonial-author");
const dots = document.querySelectorAll(".testimonial-dots .dot");

let currentTestimonial = 0;

function showTestimonial(index) {
  const t = testimonials[index];
  if (!t) return;
  textEl.textContent = t.text;
  authorEl.textContent = t.author;
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const i = Number(dot.dataset.index);
    currentTestimonial = i;
    showTestimonial(i);
  });
});

// Auto-rotate every 6 seconds
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 6000);
