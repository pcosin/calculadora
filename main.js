const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const themeToggler = document.getElementById('theme-toggler')
const body = document.querySelector('body')


const display = new Display(displayValorAnterior, displayValorActual);



botonesNumeros.forEach((boton) => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
    
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

themeToggler.addEventListener('click', () => {
    themeToggler.classList.toggle('active')
    body.classList.toggle('theme2')
})
