/*
    Funções setInterval(), setTimeout() e clearInterval()
*/

function mostrarHora() {
    let data = new Date();

    console.log(data.toLocaleTimeString('pt-br', {
        hour12: false
    }));
}

/* FUNÇÃO setInterval() */
// Esta função executa uma função passada como argumento em um intervalo de tempo e infinitamente.
setInterval(mostrarHora, 1000); // O segundo argumento é o intervalo de tempo passado em milisegundos, 1000 == 1 segundo.

// Caso a função passada como referência retorne valor, não irá funcionar, para resolver pode-se usar funções anônimas para executa-las.
setInterval(() => mostrarHora(), 2000);

// Pode-se jogar o valor do setInterval() dentro de uma variável para parar a execução com o clearInterval().
const timer = setInterval(() => mostrarHora(), 5000);

/* FUNÇÃO setTimeout() */
// Esta função de forma parecisda com a setInterval(), porém executa apenas uma vez.
setTimeout(mostrarHora, 5000);
// ou
setTimeout(() => mostrarHora(), 5000);


/* FUNÇÃO clearInterval() */
// Esta função é usada para parar a execução do setInterval().
setTimeout(() => clearInterval(timer), 15000)
