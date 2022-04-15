const card = document.querySelector("#card");
const btnOpenForm = document.querySelector("#btn-form");

card.addEventListener("click", () => {
    card.classList.toggle("active");
});

btnOpenForm.addEventListener("click", () => {
    btnOpenForm.classList.toggle("active");
});