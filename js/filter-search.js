const search = () => {
    //tomamos los valores y los convertimos en mayusculas
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    //los elementos de la tienda
    const storeItems = document.getElementById("products");
    //los productos individuales
    const product = document.querySelectorAll(".carts");
    //tomamos el elemento por el nombre de la etiqueta
    const productName = storeItems.getElementsByTagName("h2");

    //recorreos el nombre del producto para saber si coinciden y si las
    //2 condiciones son verdaderas el bucle continua
    for(let i = 0; i < productName.length; i++) {
        //creamos una variable para almacenar el producto y acceder al primer elemento
        let match = product[i].getElementsByTagName("h2")[0];

        if(match) {
            //variable para verificar si coincide el contenido de texto y el html interno
            let textValue = match.textContent || match.innerHTML
            //si el usuario escribe un valor unico la condicion sera mayor
            //que -1, tomamos el indice e lo que ingreso el uuario
            if(textValue.toUpperCase().indexOf(searchBox) > -1) {
                //tomamos el producto y si el nombre del producto coincide
                //con lo que el usuario ingreso se mostrara 
                product[i].style.display = "";
            }else{
                //si no coinciden se ocultaran
                product[i].style.display = "none";
            }
        }
    }
}






// const inputSearch = document.querySelector(".card-filter");
// const textCart = document.querySelector(".product__title");

// function searchFilters(input, selector) {
//   inputSearch.addEventListener("keyup", (e) => {
//     //si el objeto que origino el evento, su selector coincide con
//     //lo que viene en la variable input
//     if (e.target.matches(input)) {
//       // console.log(e.key);
//       inputSearch
//         .querySelectorAll(selector)
//         .forEach((elemento) =>
//           elemento.textContent.toLowerCase().includes(e.target.value)
//             ? elemento.classList.remove("filter")
//             : elemento.classList.add("filter")
//         );
//     }
//   });
// }
// searchFilters(".card-filter", ".carts");
