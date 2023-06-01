/*
    Valores primitivos são sempre copiados e os valores abstratos como arrays, objetos e funções são referenciados, ou seja, na hora de atribuir a uma variável o valor de outra variável com valor abstrato não será feito uma cópia e sim uma referência ao local que se encontra aquele valor na memória do computador e por tanto ambas as variáveis apontaram para o mesmo valor.
*/

/* Primitivos - string, number, boolean, undefined, null (bigint, symbol) */
// Valores primitivos são imutáveis, ou seja, não podem ser modificadas, somente substituidas.
let a = "Douglas";
a = "Bastos"; // Substituição.

a[0] = 'D'; // Não funciona pois não pode ser modificada.
console.log(a[0], a); // Saida == B Bastos

let b = 'B';
let c = b; // Cópia de valor primitivo (c recebe cópia de b).
// Cada um possui sua cópia de B e são independentes.
b = 'A';
console.log(b, c); // Saida == A B

/* Abstratos - array, object, function */
// Valores abstratos são mutáveis, ou seja, podem sofrer modificações.
const array = [1, 2, 3];
array[1] = 5; // Modificação.
console.log(array); // Saida == [ 1, 5, 3 ]

const obj = {nome: 'Douglas', sobrenome: 'Bastos'}
obj.sobrenome = 'Dauto';
console.log(obj); // Saida == { nome: 'Douglas', sobrenome: 'Dauto' }

const array2 = array; // Referência de array criada para array2, ambos apontam para o mesmo local na memória.
array[0] = 3;
array[1] = 2;
array[2] = 1;
console.log(array2); // Saida == [ 3, 2, 1 ] // array2 também foi afetado pois referência o mesmo valor.
// Para fazer um valor abstrato ser copiado ao invés de referênciado basta usar o spred operator:
array2 = [...array]; // "Espalhamento"
array = {...obj};
// Desta maneira será copiado.
