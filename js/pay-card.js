const card = document.querySelector("#card");
const btnOpenForm = document.querySelector("#btn-form");
const form = document.querySelector("#card-form");
const numberCard = document.querySelector("#card .number");
const nameCard = document.querySelector("#card .name");
const logo = document.querySelector("#logo");

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
// numero de tarjeta
form.inputNumber.addEventListener("keyup", (e) => {
    let valueInput = e.target.value;
    form.inputNumber.value = valueInput
    //eliminamos espacios en blanco usando una exprecion regular
    .replace(/\s/g, '')
	// eliminamos las letras
	.replace(/\D/g, '')
	// agregamos espacios cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// eliminamos el ultimo espaciado
	.trim();

    numberCard.textContent = valueInput;
    
    if(valueInput == '') {
        numberCard.textContent = "#### #### #### ####";

        logo.innerHTML = '';
    }
    // si el numero de tarjeta empieza con 4 se muestra el logo de visa
    if(valueInput[0] == 4) {
        //reiniciamos el logo que tengamos
        logo.innerHTML = '';
        //agregamos una imagen
        const image = document.createElement("img");
        //agregamos la ruta de la imagen
        image.src = "../img/logos/visa.png";
        //lo agregamos como elemento hijo
        logo.appendChild(image);
    } else if(valueInput[0] == 5) {
        logo.innerHTML = '';
        const image = document.createElement("img");
        image.src = "../img/logos/mastercard.png";
        logo.appendChild(image);
    }
});