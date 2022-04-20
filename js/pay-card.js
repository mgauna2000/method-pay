const card = document.querySelector("#card");
const btnOpenForm = document.querySelector("#btn-form");
const form = document.querySelector("#card-form");
const numberCard = document.querySelector("#card .number");
const nameCard = document.querySelector("#card .name");
const logo = document.querySelector("#logo");
const signature = document.querySelector("#card .signature p");
const monthExpiration = document.querySelector("#card .month");
const yearExpiration = document.querySelector("#card .year");
const ccv = document.querySelector("#card .ccv");

const valueTotal= document.querySelector(".price-total");

card.addEventListener("click", () => {
    card.classList.toggle("active");
});

btnOpenForm.addEventListener("click", () => {
    btnOpenForm.classList.toggle("active");
    form.classList.toggle("active");
});

// mostramos el frente de la tarjeta
const seeFront = () => {
    //comprobamos si tiene la clase active y si la tiene la borramos
    if(card.classList.contains("active")) {
        card.classList.remove("active");
    }
}

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

    //damos vuelta la tarjeta para que el usuario vea el frente
    seeFront();
});

//nombre de tarjeta
form.inputName.addEventListener("keyup", (e) => {
    let valueInput = e.target.value;
    form.inputName.value = valueInput.replace(/[0-9]/g, '');
    nameCard.textContent = valueInput;
    signature.textContent = valueInput;

    // si deja el input vacio que aparezca un nombre por defecto
    if(valueInput == '') {
        nameCard.textContent = "Juan Perez";
    }
    seeFront();
});

// mes
form.selectMonth.addEventListener("change", (e) => {
    monthExpiration.textContent = e.target.value;
    seeFront();
});

//año
form.selectYear.addEventListener("change", (e) => {
    // con slice mostramos solo los 2 ultimos digitos
    yearExpiration.textContent = e.target.value.slice(2);
    seeFront();
});

// ccv 
form.inputCCV.addEventListener("keyup", (e) => {
    if(!card.classList.contains("active")) {
        card.classList.toggle("active");
    }
    form.inputCCV.value = form.inputCCV.value
     //eliminamos espacios en blanco usando una exprecion regular
     .replace(/\s/g, '')
     // eliminamos las letras
     .replace(/\D/g, '');

     ccv.textContent = form.inputCCV.value;
});