const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});

const sections = document.querySelectorAll(".hidden-section");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const id = this.getAttribute("href").substring(1);
    scrollToMiddle(e, id);
  });
});

function scrollToMiddle(event, id) {
  event.preventDefault(); // empêche le comportement par défaut
  const target = document.getElementById(id);
  const rect = target.getBoundingClientRect();
  const targetY = window.scrollY + rect.top;
  const scrollTo = targetY - window.innerHeight / 2 + rect.height / 2;
  window.scrollTo({ top: scrollTo, behavior: "smooth" });
}

window.onload = function () {
  const toggleBtn = document.querySelector(".toggle_btn");
  const dropDownMenu = document.querySelector(".dropdown_menu");
  const menuIcon = document.getElementById("menuIcon");

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");

    if (dropDownMenu.classList.contains("open")) {
      menuIcon.src = "./274c_flat.png";
    } else {
      menuIcon.src = "./menu-btn.png";
    }
  };
};
