// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constantes com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive (constantes Maiusculas e minúsculas são diferentes)
// Não podemos modificar o valor de uma constante
// NÂO UTILIZE VAR, UTILIZE CONST

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; // o valor da constante ao ser passada para uma variável pode ser modificada.

console.log(typeof primeiroNumero); // typeof é uma função que serve para saber o tipo de dado dos valores. saida == Number
console.log(typeof primeiroNumero + segundoNumero); // saida == Number10 porque não tem modificação de precedência de operadores, primeiro foi verificado o tipo de dado do primeiro valor e depois exibido o valor do segundo.
console.log(typeof(primeiroNumero + segundoNumero)); // saida == Number porque tem modificação de precedência de operadores, primeiro foi somado depois verificado o tipo de dado.

// Apesar de não precisar usar parêntesis na função typeof, é interessante usar pois pode acontecer esse problema no segundo exemplo quando tem mais de um valor.
