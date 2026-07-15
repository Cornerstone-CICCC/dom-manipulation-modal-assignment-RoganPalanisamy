console.log("here");

const openButton = document.querySelector("#openModal");
const modal = document.querySelector("#modal");

openButton.addEventListener("click", function () {
  modal.classList.remove("invisible");

  setTimeout(function () {
    modal.classList.add("invisible");
  }, 5000);
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    modal.classList.add("invisible");
  }
});
