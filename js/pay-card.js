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

// select del mes dinamicamente
for(let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    form.selectMonth.appendChild(option);
}
// select del año dinamicamente

// guardamos el año actual dentro de una variable
const currentYear = new Date().getFullYear();

for(let i = currentYear; i <= currentYear + 8; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    form.selectYear.appendChild(option);
}