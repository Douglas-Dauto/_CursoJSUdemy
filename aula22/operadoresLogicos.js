/*
    Operadores Lógicos
    && -> AND -> E // Todas as expressões precisam ser verdadeiras para retornar true.
    || -> OR -> OU // // Apenas um expressão precisa ser verdadeira para retornar true.
    ! -> NOT -> NÂO // Retorna o inverso do retorno, ou  seja, se for true, é false.
*/

const expressaoAND = true && true && false && true;
const expressaoOR = false || false || true;
const expressaoNOT = !true;

console.log(expressaoAND); // Saida == false
console.log(expressaoOR); // Saida == true
console.log(expressaoNOT); // Saida == false
