// este el archivo que iba usar cuando apenas empezo el curso pero fui cambiando
// cosas y adaptandome a nuevas herramientas para mejorar el trabajo final

const productoMangas = document.querySelectorAll('.product__icon');
const productoPops = document.querySelectorAll('.btn-compra');
const usuario = document.querySelector('.user');
const carrito = document.querySelector('.carrito');
const buscar = document.querySelector('.buscar');
const email = document.querySelector('.email');



let productos = [
  {
    nombre: "Shingeki No Kyojin",
    precio: 550,
    categoria: "manga",
    stock: 30,
  },
  {
    nombre: "One Piece",
    precio: 1300,
    categoria: "cuadro",
    stock: 20,
  },
  {
    nombre: "Tokio Ghoul",
    precio: 1300,
    categoria: "cuadro",
    stock: 15,
  },
  {
    nombre: "Jujutsu Kaisen",
    precio: 3500,
    categoria: "figura de accion",
    stock: 5,
  },
  {
    nombre: "Akame Ga Kill",
    precio: 550,
    categoria: "manga",
    stock: 100,
  },
  {
    nombre: "Goblin Slayer",
    precio: 550,
    categoria: "manga",
    stock: 80,
  },
];

const mostrarProductos = (productos) => {
  for (const producto of productos) {
    alert(
      `el producto es: ${producto.nombre} y su precio es: ${producto.precio}, categoria del producto: ${producto.categoria}`
    );
  }
};
// mostrarProductos(productos);

const agregarProducto = (productos) => {
  let nombreProducto = prompt("Nombre del producto");
  let precioProducto = parseFloat(prompt("Precio del producto"));
  let categoriaProducto = prompt("Categoria del producto");
  let stockProducto = parseFloat(prompt("Stock del producto"));

  productos.push({
    nombre: nombreProducto,
    precio: precioProducto,
    categoria: categoriaProducto,
    stock: stockProducto,
  });
  console.table(productos);
};
// agregarProducto(productos);

const filtrarProducto = (productos) => {
  let precioMinimo = parseFloat(prompt("Escribe el precio minimo que desea"));
  let precioMaximo = parseFloat(prompt("Escribe el precio maximo que desea"));

  const filtrar = productos.filter(
    (productos) => productos.precio >= precioMinimo && productos.precio <= precioMaximo
  );
  console.log(filtrar);
};
// filtrarProducto(productos);

const buscarPorCategorias = (productos) => {

  let elijaCategoria = prompt("Elija una de las categorias: manga, cuadro o figura de accion!")

  const productoCategoria = productos.map((productos) =>{
    if(elijaCategoria == "manga" && productos.categoria == "manga"){
        return productos.nombre;
    }else if(elijaCategoria == "cuadro" && productos.categoria == "cuadro"){
      return productos.nombre;
    }else if(elijaCategoria == "figura de accion" && productos.categoria == "figura de accion"){
      return productos.nombre;
    }
    else{
      return null;
    }
})
console.log(productoCategoria);
}
// buscarPorCategorias(productos)