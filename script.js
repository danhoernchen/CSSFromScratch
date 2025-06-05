const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  console.log("clicked");
  if (navToggle.getAttribute("aria-expanded") === "true") {
    navToggle.setAttribute("aria-expanded", "false");
  } else {
    navToggle.setAttribute("aria-expanded", "true");
  }
});

const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("no-animation");
  requestAnimationFrame(() => {
    document.body.classList.remove("no-animation");
  });
});

resizeObserver.observe(document.body);
