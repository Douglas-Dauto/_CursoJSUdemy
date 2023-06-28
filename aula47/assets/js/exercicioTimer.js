const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let timer, hora = 0, minuto = 0, segundo = 0, controle = true;

iniciar.addEventListener('click', () => {
    if(controle) {
        timer = setInterval(() => {
            segundo++;

            if(segundo === 60) {
                minuto++;
                segundo = 0;

                if(minuto === 60) {
                    hora++;
                    minuto = 0;

                    if(hora === 24) {
                        hora = 0;
                        minuto = 0;
                        segundo = 0;
                    }
                }
            }

            relogio.innerHTML = `${addZeroAEsquerda(hora)}:${addZeroAEsquerda(minuto)}:${addZeroAEsquerda(segundo)}`;
            relogio.setAttribute('class', 'relogio');

            controle = false;
        }, 1000);
    }
});

pausar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.setAttribute('class', 'relogio pausado');
    controle = true;
});

zerar.addEventListener('click', () => {
    hora = 0;
    minuto = 0;
    segundo = 0;

    clearInterval(timer);
    relogio.innerHTML = `00:00:00`;
    relogio.setAttribute('class', 'relogio');
    controle = true;
});

function addZeroAEsquerda(numero) {
    return numero < 10?`0${numero}`:numero;
}
