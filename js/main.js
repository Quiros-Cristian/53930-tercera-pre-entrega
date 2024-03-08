function solicitarNombreDeUsuario() {
    let nombreIngresado = prompt("Ingrese su nombre: ");
    let apellidoIngresado = prompt("Ingrese su apellido: ");
    let devolucion = ("Bienvenido a nuestra tienda de indumentaria " + nombreIngresado + " " + apellidoIngresado);

    alert(devolucion);
}

solicitarNombreDeUsuario();


let carrito = []

class ropas {
    constructor(prenda, talle, precio, color){
        this.prenda = prenda
        this.talle = talle
        this.precio = precio
        this.color = color
    }
}


let remera = new ropas('remera', 'm', 10000, 'blanco')
let pantalon = new ropas('pantalon', 40, 15000, 'negro')
let zapatillas = new ropas('zapatillas', 42, 30000, 'blanca')
let campera = new ropas('campera', 'm', 20000, 'blanco')


let continuar; 

do{
    let agregar_producto = Number(prompt('desea agregar alguno de estos productos? \n1) remera, \n2) pantalon, \n3) zapatillas, \n4) campera \nen ese caso elija el numero'))

if(agregar_producto === 1){
    carrito.push(remera)
}else if(agregar_producto === 2){
    carrito.push(pantalon)
}else if(agregar_producto === 3){
    carrito.push(zapatillas)
}else if(agregar_producto === 4){
    carrito.push(campera)
}else{
    console.log('el producto solicitado no se encuentra en la lista')
}

continuar = prompt("¿desea agregar otro producto al carrito? SI/NO").toLowerCase();

}while (continuar === 'si')

console.log(carrito)