//variables
let allContainerCart = document.querySelector(".products");
let containerBuyCart = document.querySelector(".card-items");
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');
let list = document.querySelector('#list');
let btnPay = document.querySelector('.btn-pay');
// const valueTotal = document.querySelector("#total").textContent;

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

// agregamos los proximos productos con fetch
const requestData = async () => {
  const res = await
  fetch("./nextProducts.json")
  const data = await res.json()

  data.forEach((post) => {
    const listProducts = document.createElement("li");
    listProducts.innerHTML = `
    <img src=${post.imagen} alt="">
    <h3>${post.nombre}</h3>
    <p>${post.info}</p>
    `;
    list.append(listProducts);
  })
}
requestData();



//funciones
loadEventListeners();
function loadEventListeners() {
  allContainerCart.addEventListener("click", addProduct);
  containerBuyCart.addEventListener("click", deleteProduct);
}

function addProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn-add-cart")) {
    //el parentElement agarre al elemento padre de lo que elegimos
    const selectProduct = e.target.parentElement;
    Swal.fire({
      title: 'El producto a sido agregado a su carrito',
      imageUrl: './img/icon.jpg',
      confirmButtonColor: '#ff4e00',
      confirmButtonText: '¡ Arigatō !',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    console.log(selectProduct);
    readTheContent(selectProduct);
  }
}
//filtramos el array y si encuentra un producto con igual id no lo agrega
function deleteProduct(e) {
  if (e.target.classList.contains("delete-product")) {
    const deleteId = e.target.getAttribute("data-id");

    buyThings.forEach(value => {
        if (value.id == deleteId) {
            let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
            totalCard = totalCard - priceReduce;
            totalCard = totalCard.toFixed(2);
        }
    })

    buyThings = buyThings.filter(product => product.id !== deleteId);

    countProduct--;
  }
  loadHtml();
}

function readTheContent(product) {
  const infoProduct = {
    //tomamos los valores del producto seleccionado
    image: product.querySelector("div img").src,
    title: product.querySelector(".product__title").textContent,
    price: product.querySelector("div p span").textContent,
    id: product.querySelector("a").getAttribute("data-id"),
    amount: 1
  }
  //cada que añadamos un producto lo sumamos
  totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
  totalCard = totalCard.toFixed(2);
  //preguntamos si el nuevo producto que añadimos ya esta en el array
  const exist = buyThings.some(product => product.id === infoProduct.id);
  if (exist) {
      //creamos una variable con un nuevo array para modificar el objeto
      const pro = buyThings.map(product => {
          if (product.id === infoProduct.id) {
              product.amount++;
              return product;
          }else{
              return product;
          }
      });
      buyThings = [...pro];
  }else{
      //si no existe el elemento directamente se añade
      buyThings = [...buyThings, infoProduct];
      countProduct++;
  }
  loadHtml();
}

function loadHtml() {
  clearHtml();
  //recorremos el array para que valla imprimiendo los productos
  buyThings.forEach(product => {
    const { image, title, price, amount, id } = product;
    const row = document.createElement("div");
    row.classList.add("item");
    row.innerHTML = `
        <img src="${image}" alt="">
                        <div class="item-content">
                            <h5>${title}</h5>
                            <h5 class="cart-price">$${price}</h5>
                            <h6>Cantidad: ${amount}</h6>
                        </div>
                        <span class="delete-product" data-id="${id}">X</span>
        `;
    containerBuyCart.appendChild(row);

    priceTotal.innerHTML = totalCard;

    console.log(totalCard);

    amountProduct.innerHTML = countProduct;
  });
}

btnPay.addEventListener("click", () => {
  //almacenamos los productos en el localStorage
  const becomeJson = JSON.stringify(totalCard);
  localStorage.setItem("total", becomeJson);
  console.log(localStorage);
  // fetch('./totalPrice.json', {
  //   method: "POST",
  //   body: JSON.stringify({
  //     precio: totalCard.textContent,
  //   }),
  //   headers: {
  //     "Content-type": "aplication/json"
  //   },
  // })
  // .then((res) => res.json())
  // .then((data) => console.log(data))
});


function clearHtml() {
  containerBuyCart.innerHTML = "";
}
