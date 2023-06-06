
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const mostrarHora = document.querySelector('.iniciar')
let segundos = 0;
let timer;

function getTimerSecunds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    });
}

function initTimer() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimerSecunds(segundos)
    }, 1000);
}

document.addEventListener('click', function(e){
   const element = e.target;
   
   if(element.classList.contains('zerar')) {
    console.log('voce clicou em zerar');
   }
});

iniciar.addEventListener('click' , function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    initTimer();
});

pausar.addEventListener('click' , function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click' , function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});

