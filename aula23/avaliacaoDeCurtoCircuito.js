/*
    Avaliação de curto-circuito (Short-circuit) é a leitura de uma expressão lógica composta.

    && -> Retornará o primeiro valor falso, caso não tenha, retornará o último valor verdadeiro.
    || -> Retornará o primeiro valor verdadeiro, caso não tenha, retornará o último valor falso.

    FALSY // Nome dado a esse grupo de valores que são avaliados como false no circuito.
     false
     0
     '' "" ``
     null
     undefined
     NaN
*/

/* Avaliação de curto-circuito AND */
console.log('Douglas' && 0 && 'Bastos'); // Saida == 0
console.log('Dauto' && true && NaN); // Saida == NaN

function dizerOi() {
    return "Oi";
}

let podeExecutar = false;
console.log(podeExecutar && dizerOi()); // Saida == false

podeExecutar = true;
console.log(podeExecutar && dizerOi()); // Saida == Oi

/* Avaliação de curto-circuito OR */
console.log(0 || false || null || undefined || '' || `Douglas` || true); // Saida == Douglas

let corUsuario = null;
let corPadrao = corUsuario || 'preto';
console.log(corPadrao); // Saida == preto

corUsuario = 'dourado';
corPadrao = corUsuario || 'preto';
console.log(corPadrao); // Saida == dourado
