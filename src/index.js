import "./styles.css";
// Modal Implementation

const openBtnHandler = (event) => {
  event.stopPropagation();
  const appElement = document.getElementById("app");
  appElement.style.opacity = 0.5;
  const modalElement = document.getElementById("modal");
  modalElement.style.display = "block";
};
const outModalClickHandler = (event) => {
  event.stopPropagation();
  const appElement = document.getElementById("app");
  appElement.style.opacity = 1;
  const modalElement = document.getElementById("modal");
  modalElement.style.display = "none";
};
const modalContentClickHandler = (event) => {
  event.stopPropagation();
};
(() => {
  const modalRootElement = document.getElementById("modal");
  const modalContentElement = document.getElementById("modal-content");
  modalRootElement.addEventListener("click", outModalClickHandler);
  modalContentElement.addEventListener("click", modalContentClickHandler);
  const openModalBtn = document.getElementById("open-modal-btn");
  openModalBtn.addEventListener("click", openBtnHandler);
})();
