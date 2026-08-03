document.getElementById("year").textContent = new Date().getFullYear();

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

// Hero reveals on load
requestAnimationFrame(() => {
  document.querySelectorAll(".hero .reveal").forEach((el) => {
    el.classList.add("is-visible");
  });
});
