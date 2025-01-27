document.getElementById("animateBtn").addEventListener("click", function () {
    const box = document.getElementById("box");
    box.classList.toggle("animate");
  });
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("show");
});