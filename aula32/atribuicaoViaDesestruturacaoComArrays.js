/* Atribuição via Desestruturação com Arrays */
// É uma forma mais eficiente de se criar e atribuir valores de arrays em variáveis.
// As variáveis criadas em tal posição no array receberá o valor da mesma posição do outro array.
const arrayNum = [1, 2, 3, 4];
let [um, dois, tres, quatro] = arrayNum;
// atribuição via Desestruturação = arrayNum

console.log(dois); // Saida == 2
[um, dois, tres] = [10, 20, 30]; // // Reatribuindo
console.log(tres); // Saida == 30

const [nome, sobrenome, idade] = ['Douglas', 'Bastos', 22];
console.log(nome, sobrenome, idade); // Saida == Douglas Bastos 22

// Pode-se pular valores com a vírgula e também pegar o resto dos valores não capturados usando o operador ... (rest).
const [, [, numDois], ...resto] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numDois, resto); // Saida == 5 [ [ 7, 8, 9 ] ]

// Pode-se fazer deste jeito para facilitar
// Também podemos setar valores padrão para as variáveis criadas na desestruturação.
const [lista1, lista2 = [4, 5, 6], lista3] = [[1, 2, 3], undefined, [7, 8, 9]];
console.log(lista2[1]); // Saida == 5

// OBS: Todas as variáveis da atribuição via desestruturação ou são const ou let ou var pois declaramos todas de uma vez só.
