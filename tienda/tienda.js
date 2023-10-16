let box_producto = document.querySelector(".box_productos")
let category = document.querySelectorAll(".category")
let caro = []
let solo;
solo = producto_mascotas.filter(items => items.cantidad == 1)
hacer_el_carrito()

category.forEach(function(cat,index){
    cat.addEventListener("click",function(){
        box_producto.innerHTML = ""
        if(index == 0){
            solo = producto_mascotas.filter(items => items.cantidad == 1)
        }
        else if(index == 1){
            solo = producto_mascotas.filter(items => items.categoria == "alimentos")
        }
        else if(index == 2){
            solo = producto_mascotas.filter(items => items.categoria == "accesorios")
        }
        else if(index == 3){
            solo = producto_mascotas.filter(items => items.categoria == "comedores")
        }
        else if(index == 4){
            solo = producto_mascotas.filter(items => items.categoria == "camas")
        }
        else if(index == 5){
            solo = producto_mascotas.filter(items => items.categoria == "champus")
        }else{
            solo = producto_mascotas.filter(items => items.categoria == "collares")
        }
        hacer_el_carrito()
    })
})

function hacer_el_carrito(){
    solo.forEach(function(pro,indice){
        let caja = document.createElement("div")
        caja.classList.add("caja")

        caja.innerHTML +=  ` 
                    <div class="imagen_caro"> 
                        <img src=" ${pro.imagen} " class="im">   
                    </div>
                    <h3> ${pro.nombre} </h3>
                    <p class="des"> ${pro.descripcion} </p>
                    <p class="precio"> Bs. ${Math.round(pro.precio)}.00 </p>
                    <h2 class="espaciado">  </h2>
                    <button class="agregar"> Agregar al Carrito </button>
        `
    //esta parte es para ver si la imagen (url) se cargo sino se cambia por una predeterminado
        let im = caja.querySelector("img")
        im.addEventListener("error",function(){
            im.src = "../asset/comidaDog.png"
        })
        box_producto.append(caja)

        let agregar = caja.querySelector(".agregar")
        agregar.addEventListener("click",function(){
            let existe = caro.some(element => element.id == pro.id)
            if(existe){
                console.log("hay +")
                caro.forEach(function(up){
                    if(up.id == pro.id){
                        up.cantidad++
                    }
                })
                aumentar_carro()
            }else{
                let newData = { 
                    id: pro.id, 
                    nombre: pro.nombre, 
                    descripcion: pro.descripcion, 
                    precio: pro.precio, 
                    imagen: pro.imagen, 
                    cantidad: pro.cantidad, 
                    categoria:pro.categoria
                }

                caro.push(newData)
                console.log(caro)
                contar_carro()
            }
            mostrar_carrito()
        })
    })
}

function mostrar_carrito(){
    console.log("carrito")
    let num = 0;
    let car_lista = document.querySelector(".car_lista")
    car_lista.innerHTML = ""
    caro.forEach(function(uno,i){
        let cuadro = document.createElement("div")
        cuadro.classList.add("cuadro")
        cuadro.innerHTML += `
                    <img src=" ${uno.imagen} ">   
                    <div class="flex">  
                        <h4> ${uno.nombre} </h4>
                        <div class="flex_botones">
                            <button class="mas"> + </button>
                            <h3> ${uno.cantidad} </h3>
                            <button class="menos"> - </button>
                            <p> Bs. ${Math.round(uno.precio)}.00 </p>
                        </div>
                    </div>    
                    <button class="eliminar"> <img src="../asset/basura.png"> </button>
            `
        let cu = cuadro.querySelector("img")
        cu.addEventListener("error",function(){
            cu.src = "../asset/comidaDog.png"
        })
        car_lista.append(cuadro)

        let mas = cuadro.querySelector(".mas")
        mas.addEventListener("click",function(){
            uno.cantidad++
            mostrar_carrito()
        })

        let menos = cuadro.querySelector(".menos")
        menos.addEventListener("click",function(){
            if(uno.cantidad == 1){
                uno.cantidad = 1
            }else{
                uno.cantidad--
            }
            mostrar_carrito()
        })

        let eliminar = cuadro.querySelector(".eliminar")
        eliminar.addEventListener("click",function(){
            caro.splice(i,1)
            if(caro.length == 0){
                total.textContent = "Bs. 0"
                mostrar_carrito()
            }
            mostrar_carrito()
            aumentar_carro()
        })

        let total = document.querySelector(".total")
        num = num + (uno.precio * uno.cantidad)
        console.log(num)
        total.textContent = "Bs. " + Math.round(num) + ".00"


    })        
    if(caro.length == 0){
        car_lista.innerHTML = `<h6> Carrito Vacio</h6>`
        }
}

let carrito_compras = document.querySelector(".carrito_compras")
carrito_compras.addEventListener("touchmove",function(event){
    event.stopPropagation();
})
let carrito = document.querySelector(".carrito")
carrito.addEventListener("click",function(){
    carrito_compras.classList.toggle("aparecer")
})

let box_tienda = document.querySelector(".box_tienda")
box_tienda.addEventListener("touchmove",function(){
    carrito_compras.classList.remove("aparecer")
})

function contar_carro(){
    let punto = document.querySelector(".punto")
    punto.textContent = caro.length
    punto.style.padding="9px"
    punto.style.background="rgb(255, 120, 12)"
    setTimeout(()=>{
        punto.style.padding="4px"
        punto.style.background="rgb(255, 223, 12)"
    },250)
}

function aumentar_carro(){
    let punto = document.querySelector(".punto")
    punto.textContent = caro.length
    punto.style.background="rgb(255, 120, 12)"
    setTimeout(()=>{
        punto.style.background="rgb(255, 223, 12)"
    },250)
}


let menu_nav = document.querySelector(".menu_nav")
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click",function(){
    menu_nav.classList.toggle("entrar")
    hamburger.children[0].classList.toggle("one-rotate")
    hamburger.children[1].classList.toggle("two-rotate")
    hamburger.children[2].classList.toggle("tree-rotate")
})

let body = document.querySelector("body")
body.addEventListener("touchmove",cerrar_menu)
menu_nav.addEventListener("click",cerrar_menu)

function cerrar_menu(){
    menu_nav.classList.remove("entrar")
    hamburger.children[0].classList.remove("one-rotate")
    hamburger.children[1].classList.remove("two-rotate")
    hamburger.children[2].classList.remove("tree-rotate")
}

let box_comprar = document.querySelector(".box_comprar")
let bien = document.querySelector(".bien")
let line = document.querySelector(".line")
let comprar = document.querySelector(".box_comprar")
comprar.addEventListener("click",function(){
    line.style.width="100%"
    box_comprar.style.opacity="50%"
    setTimeout(()=>{   //poner un if para ver si caro esta vacio
        line.style.width="0%"
        carrito_compras.classList.remove("aparecer")
        caro.splice(0,caro.length)
        aumentar_carro()
        bien.style.bottom="0%"
        box_comprar.style.opacity="100%"
        setTimeout(()=>{
            bien.style.bottom="-20%"
            let total = document.querySelector(".total")
            if(caro.length == 0){
                total.textContent = "Bs. 0"
                mostrar_carrito()
            }
        },2000)
    },1000)
})