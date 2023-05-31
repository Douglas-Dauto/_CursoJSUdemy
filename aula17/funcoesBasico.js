/* DECLARAÇÃO CLÁSSICA DE FUNÇÃO */
// Colocamos a palavra "function" e depois nomeamos a função seguida de parêntesis.
function dizerOi() { // Declaração mais comum de uma função.
    console.log('Oi');
} // Tudo dentro das chaves {} está protegido (encapsulado) do lado exterior, chamamos de scopo.
// Código escrito dentro do corpo da função (chaves {}) não tem ligação com o código exterior.

// Chamada da função para execução do seu código interno. // Saida == Oi
dizerOi(); // Quando usamos os parêntesis na chamada da função estamos pedindo para ela ser executada.
// Quando não usamos os parêntesis na chamada da função estamos pedindo para ela ser apresentada mas não executada.
console.log(dizerOi); // Saida == [Function: dizerOi]

// Esta está executando resultado e o console.log() mostrando o retorno que no caso é undefined pois não retorna nada.
console.log(dizerOi()); // Saida == Oi Retorno == undefined


/* DECLARAÇÂO DE FUNÇÃO ANÔNIMA */
// Este nome de função basicamente se dá pelo fato de não precisarmos dar nomes a elas.
// Existem dois tipos de Funções Anônimas e elas na maioria das vezes precisam ser armazenadas em uma variável ou constante para poder usar seu nome na chamada: 

/* FUNÇÃO ANÔNIMA function() {} */
// Este tipo usa apenas a palavra function para declarar-lá.
const digaOla = function() {
    console.log("Olá");
}

console.log(digaOla); // Saida == [Function: digaOla]
digaOla(); // Saida == Olá

/* FUNÇÃO ANÔNIMA ARROW FUNCTION () => {} */
// Este tipo é um shorthand da funçao anônima simples, podendo usar apenas parêntesis e uma seta.
const digaPrazer = () => console.log('Prazer');
digaPrazer(); // Saida == Prazer
// Ou
const digaHello = () => {
    console.log('Hello');
}
digaHello(); // Saida == Hello

// OBS: Funções anônimas passadas como argumento de outra função não precisam de variável.
// document.addEventListener('click', () => {
//     console.log('Hello2');
// });


/* RETORNO DE FUNÇÕES */
// Funções podem retornar valores quando são chamadas.
function digaHi() {
    return console.log('Hi'); // É impoortante perceber que nada abaixo de return é executado.
    console.log("oi"); // Não será executado pois o return quebrará o fluxo aqui de dentro.
}

digaHi(); // Saida ==  Hi
console.log(digaHi()); // Saida == Hi Retorno (sem retorno) == undefined

/* PARÂMETROS E ARGUMENTOS DE FUNÇÕES */
// Parametro é a variável criada dentro dos parêntesis na criação da função.
// Argumento é o valor passado dentro dos parêntesis na chamada da função, este valor é transferido para o parâmetro depois para ser usado na função.
function soma(x, y) { // x e y são Parâmetros.
    return x + y;
}
console.log(soma(2, 4)); // 2 e 4 são Argumentos. // Saida == 6

// Exemplo 2: 
const digaNome = nome => console.log(`Seu nome é ${nome}`); // Quando só tem um parâmetro em arrow function pode-se eliminar os parêntesis.
digaNome("Douglas"); // Saida == Seu nome é Douglas
// Pode-se eliminar a palavra return também quando o código é de apenas uma linha.
