const btnLight = document.querySelector(".light");
const btnDark = document.querySelector(".dark");

const body = document.querySelector("body");

btnLight.addEventListener("click", () => {
  body.style.backgroundColor = "#e0e27c";
  body.style.color = "black";
});

btnDark.addEventListener("click", () => {
  body.style.backgroundColor = "#5b0707";
  body.style.color = "white";
});
