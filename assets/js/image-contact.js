let image = document.querySelector("[data-image]");
image.style.height = image.nextElementSibling.clientHeight + "px";

window.addEventListener("resize", () => {
  if (image.clientHeight !== image.nextElementSibling.clientHeight) image.style.height = image.nextElementSibling.clientHeight + "px";
});
