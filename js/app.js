function sectionInViewPort(elem) {
  let sPosition = elem.getBoundingClientRect();
  return sPosition.top >= 0;
}

document.addEventListener("DOMContentLoaded", () => {
  //getting all sections and selecting unorderd list
  const allSections = document.querySelectorAll("section");
  const Lists = document.querySelector("#navbar__list");

  //creation the elements of the list and putting links into it
  for (let i = 0; i < allSections.length; i++) {
    //creating links with class
    const link = document.createElement("a");
    link.classList = "menu__link";
    link.innerHTML = allSections[i].dataset.nav;
    link.dataset.nav = allSections[i].id;
    //creating list to append liks to it
    const list = document.createElement("li");
    list.appendChild(link);
    Lists.appendChild(list);
  }

  const links = document.querySelectorAll(".menu__link");
  links.forEach((item) => {
    item.addEventListener("click", () => {
      const el = document.querySelector(`#${item.getAttribute("data-nav")}`);
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
//giving section the class 'your-active-class'
document.addEventListener("scroll", () => {
  for (let i = 0; i < allSections.length; i++) {
    if (sectionInViewPort(allSections[i])) {
      if (!allSections[i].classList.contains("your-active-class")) {
        allSections[i].classList.add("your-active-class");
      }
    } else {
      allSections[i].classList.remove("your-active-class");
    }
  }
});
});