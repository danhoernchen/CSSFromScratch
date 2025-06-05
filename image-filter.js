const cards = document.querySelectorAll(".image-cards .card");
const dogFilter = document.querySelector("#dog");
const themeFilter = document.querySelector("#theme");
const currentFilters = {
  dog: "both",
  theme: "all",
};
const noMatches = document.querySelector(".no-matches");

dogFilter.addEventListener("change", toggleFilter);
themeFilter.addEventListener("change", toggleFilter);

cards.forEach((card, index) => {
  card.style.viewTransitionName = `card-iamge-${index + 1}`;
});

function toggleFilter(el) {
  currentFilters[el.currentTarget.id] = el.currentTarget.value;
  if (!document.startViewTransition) {
    filterCards();
    return;
  }
  document.startViewTransition(() => filterCards());
}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const dog =
      card.querySelector("[data-dog]").getAttribute("data-dog") ===
        currentFilters.dog || currentFilters.dog === "both";
    const theme =
      card.querySelector("[data-theme]").getAttribute("data-theme") ===
        currentFilters.theme || currentFilters.theme === "all";
    console.log(theme);
    if (dog && theme) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });
  noMatches.hidden = hasVisibleCards ? true : false;
}

function enableFiltering() {
  dogFilter.hidden = false;
  themeFilter.hidden = false;
}
enableFiltering();
