let verMas = document.querySelector(".ver_mas")
let on = document.querySelectorAll(".on")


verMas.addEventListener("click",function(){
    if(verMas.textContent == "Ver Mas"){
        on[0].style.display="flex"
        on[1].style.display="flex"
        on[2].style.display="flex"
        verMas.textContent = "Ver Menos"
        console.log(1)
    }else{
        on[0].style.display="none"
        on[1].style.display="none"
        on[2].style.display="none"
        verMas.textContent = "Ver Mas"
    }
})


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
