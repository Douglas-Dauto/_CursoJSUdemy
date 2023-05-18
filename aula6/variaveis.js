// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive (variáveis Maiusculas e minúsculas são diferentes)
// Não podemos redeclaras variáveis com let
// NÂO UTILIZE VAR, UTILIZE LET

let numero; // Declaração sem inicialização
numero = 2; // Inicialização

let nomeCliente = "Luiz"; // Declaração com inicialização
nomeCliente = "Otávio"; // Substituição de valor

console.log(nomeCliente);

var palavra = "Douglas";
var palavra = "Douglas2"; // Redeclarável


let nome = "Douglas";

console.log(`${nome} nasceu em 2001.`);
console.log(`Em 2017 ${nome} conheceu Ester.`);
console.log(`${nome} casou-se com Ester em 2025.`);
console.log(`Ester teve um filho com ${nome} em 2033.`);
console.log(`O filho de ${nome} se chama Mike.`);
