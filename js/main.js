let carrito = []

let carritoDeCompras = document.querySelector('#productosCarrito')



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

let p_carrito = document.querySelector('.primero')

let boton_remera = document.querySelector('.producto_remera')

    boton_remera.addEventListener('click' ,()=>{
        carrito.push(remera)
        console.log(carrito)
        let div = document.createElement('h3');
        div.textContent = 'remera';
        carritoDeCompras.appendChild(div);
})

let boton_pantalon = document.querySelector('.producto_pantalon')

    boton_pantalon.addEventListener('click' ,()=>{
        carrito.push(pantalon)
        console.log(carrito)
        let div = document.createElement('h3');
        div.textContent = 'pantalon';
        carritoDeCompras.appendChild(div);
})

let boton_zapatilla = document.querySelector('.producto_zapatilla')

    boton_zapatilla.addEventListener('click' ,()=>{
        carrito.push(zapatillas)
        console.log(carrito)
        let div = document.createElement('h3');
        div.textContent = 'zapatilla';
        carritoDeCompras.appendChild(div);
})

let boton_campera = document.querySelector('.producto_campera')

    boton_campera.addEventListener('click' ,()=>{
        carrito.push(campera)
        console.log(carrito)
        let div = document.createElement('h3');
        div.textContent = 'campera';
        carritoDeCompras.appendChild(div);
})

let carritoHTML = document.querySelector('#productos')


let boton_oscuro = document.querySelector('#modo_oscuro')

if(localStorage.getItem('mode')){
    document.body.classList.value = localStorage.getItem('mode')
}



boton_oscuro.addEventListener('click' ,()=> {


    let mode = document.body.classList.value

    if(mode == 'bg-oscuro'){
        document.body.classList.value = 'bg-claro'
        localStorage.setItem('mode','bg-claro')
        boton_oscuro.innerText = 'Modo oscuro'
    }else{
        document.body.classList.value = 'bg-oscuro'
        localStorage.setItem('mode','bg-oscuro')
        boton_oscuro.innerText = 'Modo claro'
    }


})
