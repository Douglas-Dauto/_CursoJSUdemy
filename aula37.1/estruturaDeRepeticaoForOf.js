/*
    Estrutura for of - Estrutura de Repetição com Variável de Controle
*/

const array = ['Douglas', 'Dauto', 'Bastos'];
const string = "Lieci";

// O for of funciona apenas para dados iteráveis como strings e arrays que possuem índices, em objetos não funciona.
// O for of retorna o valor em si de cada índice ao invés do próprio índice.
for(let valor of array) {
    console.log(valor); // Saida == Douglas Dauto Bastos
}

for(let valor of string) {
    console.log(valor); // Saida == L i e c i
}

/* Resumo */
/*
    for clássico - geralmente com strings e arrays.
    for in - retorna o índice ou chave e funciona para strings, arrays e objetos.
    for of - retorna o valor em si e funciona apenas para strings e arrays.
*/
