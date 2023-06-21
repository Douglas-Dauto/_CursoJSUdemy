/*
    Estrutura for in - Estrutura de Repetição com Variável de Controle
*/

const array = ['Douglas', 'Dauto', 'Bastos'];
const objeto = {
    nome: 'Luana',
    sobrenome: 'Dauto',
    idade: 21
};
const string = "Lieci";

// O for in funciona da mesma maneira que o for clássico, porém lendo os índicies ou chaves ao invés de incrementar uma variável.
// O for in em arrays e strings retorna os índices.
for(let indice in array) {
    console.log(array[indice]); // Saida == Douglas Dauto Bastos
}

for(let indice in string) {
    console.log(string[indice]); // Saida == L i e c i
}

// O for in em objetos retorna as chaves.
for(let chave in objeto) {
    console.log(objeto[chave]); // Saida == Luana Dauto 21
}

/* Resumo */
/*
    for clássico - geralmente com strings e arrays.
    for in - retorna o índice ou chave e funciona para strings, arrays e objetos.
    for of - retorna o valor em si e funciona apenas para strings e arrays.
*/
