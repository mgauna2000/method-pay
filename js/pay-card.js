const card = document.querySelector("#card");
const btnOpenForm = document.querySelector("#btn-form");
const form = document.querySelector("#card-form");

card.addEventListener("click", () => {
    card.classList.toggle("active");
});

btnOpenForm.addEventListener("click", () => {
    btnOpenForm.classList.toggle("active");
    form.classList.toggle("active");
});