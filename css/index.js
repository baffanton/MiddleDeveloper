const className = "nav-bar__list_active";

const onMenuClickHandler = () => {
  const burgerMenuElement = document.getElementById("nav-bar__list");

  const classList = Array.from(burgerMenuElement.classList);

  if (classList.includes(className)) {
    burgerMenuElement.classList.remove(className);
    return;
  }

  burgerMenuElement.classList.add(className);
}