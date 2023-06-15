const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const themeToggler = document.getElementById('theme-toggler');
const body = document.querySelector('body');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))    
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});


let currentTheme = localStorage.getItem('theme') || '1';

themeToggler.classList.add(`active-${currentTheme}`);
body.classList.add(`theme${currentTheme}`);


themeToggler.addEventListener('click', () => {
  themeToggler.classList.remove('active', 'active-2', 'active-3');
  body.classList.remove('theme2', 'theme3');

  currentTheme = (currentTheme % 3) + 1;

  localStorage.setItem('theme', currentTheme);

  themeToggler.classList.add(`active-${currentTheme}`);
  body.classList.add(`theme${currentTheme}`);
});