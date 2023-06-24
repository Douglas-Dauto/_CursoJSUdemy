/*
    Escreva uma função que receba dois números e retorne o maior deles.
*/

function retornarMaiorNumeroMath(numUm, numDois) {
    return Math.max(numUm, numDois);
}

console.log(retornarMaiorNumeroMath(4, 3)); // Saida == 4

const retornarMaiorNumeroLogica = function(numUm, numDois) {
    return numUm > numDois?numUm:numDois;
}

console.log(retornarMaiorNumeroLogica(4, 20)); // Saida == 20
