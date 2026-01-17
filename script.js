// 🌙 Dark Mode
const darkBtn = document.getElementById("darkBtn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// 🌍 Language Toggle
let isArabic = false;
const langBtn = document.getElementById("langBtn");

langBtn.addEventListener("click", () => {
  isArabic = !isArabic;

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = isArabic ? el.dataset.ar : el.dataset.en;
  });

  document.body.dir = isArabic ? "rtl" : "ltr";
  document.documentElement.lang = isArabic ? "ar" : "en";
});

// ✨ Scroll Animation
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));
