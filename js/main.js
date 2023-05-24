
//Menu hamburguesa
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', ()=>{
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('activo');
})

//Carrusel
const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadapunto, i)=>{

    punto[i].addEventListener('click', ()=>{
        let posicion = i;
        let operacion = (posicion * -12.5);

        grande.style.transform = (`translateX(${operacion}%)`);

        punto.forEach((cadapunto,i)=>{

            punto[i].classList.remove('active');

        })

        punto[i].classList.add('active');
    })

})

