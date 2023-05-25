
/* FUNCIONAMENTO DO ARRAY e COMPARAÇÂO COM STRINGS */
//            0123456789...
const nome = 'Douglas Bastos'; // Strings possuem indicies em cada caractere e começa em 0.
console.log(nome[0]); // // Saida == D

//               0          1        2
const alunos = ['Douglas', 'Lucas', 'Rilton']; // Arrays possuem indicies em cada elemento e começa em 0.
console.log(alunos); // Saida == [ 'Douglas', 'Lucas', 'Rilton' ]
console.log(`${alunos}`); // Saida == Douglas,Lucas,Rilton
console.log(alunos[0]); // Saida == Douglas

alunos[0] = "Bastos"; // Substituirá 'Douglas' no array.
alunos[3] = "Otávio"; // Criará o índice 3 no array e adicionará 'Otávio'.
console.log(alunos); // Saida == [ 'Bastos', 'Lucas', 'Rilton', 'Otávio' ]

// Pode-se adicionar qualquer tipo de dado em um array.
alunos[4] = true;
alunos[5] = 20;
let n = 2.2;
alunos[6] = n;
console.log(alunos); // Saida == ['Bastos', 'Lucas', 'Rilton', 'Otávio', true, 20, 2.2]
// Recomenda-se que os arrays possuam todos os elementos do mesmo tipo de dado.

// Pode-se pular índicies na hora de atribuir valores
let valoresTeste = [] // valoresTeste recebe array vazio.
valoresTeste[0] = "Roberto";
valoresTeste[1] = false;
valoresTeste[50] = "Maria";
console.log(valoresTeste); // Saida == [ 'Roberto', false, <48 empty items>, 'Maria' ]

// O array é considerado um objeto em javascript.
console.log(typeof valoresTeste); // Saida == object

/* ATRIBUTO length DO ARRAY */
// Retorna o tamanho do array, ou seja, quantidades de elementos.
console.log(alunos.length); // Saida == 7 // Total de índices 6
// É importante perceber que a quantidade de elementos do array é uma unidade maior que o índicie dele.
// Para resolver isso subtraimos 1 do atributo length para sincronizar com os índices.
console.log(alunos.length - 1); // Saida == 6 // Total de índices 6

/* MÉTODO push() DO ARRAY */
// Criará um novo índice no final array e adicionará o argumento passado.
alunos.push('João'); // Mesma coisa que alunos[alunos.length] = "João"
console.log(alunos); // Saida == ['Bastos', 'Lucas', 'Rilton', 'Otávio', true, 20, 2.2, 'João']

/* MÉTODO unshift() DO ARRAY */
// Criará um novo índice no inicio array e adicionará o argumento passado.
alunos.unshift('Marcos'); // Este método moverá todos os elementos um índice para direita para que possa incluir o novo elemento no índice 0.
console.log(alunos); // Saida == ['Marcos', 'Bastos', 'Lucas', 'Rilton', 'Otávio', true, 20, 2.2, 'João']

/* MÉTODO pop() DO ARRAY */
// Removerá o último elemento do array.
alunos.pop();
console.log(alunos); // Saida == ['Marcos', 'Bastos', 'Lucas', 'Rilton', 'Otávio', true, 20, 2.2]
// Pode-se guardar o valor retirado do array, pois este método retorna ele.
const valorRemovido1 = alunos.pop();
console.log(valorRemovido1); // Saida == 2.2

/* MÉTODO delete() DO ARRAY */
// Removerá o elemento do índice passado do array.
let elementos = ['Sapato', true, 90, "Ester"];
delete elementos[1];
delete(elementos[3]);
console.log(elementos); // Saida == [ 'Sapato', <1 empty item>, 90, <1 empty item> ]

/* MÉTODO shift() DO ARRAY */
// Removerá o primeiro elemento do array.
alunos.shift();
console.log(alunos); // Saida == ['Bastos', 'Lucas', 'Rilton', 'Otávio', true, 20]
// Pode-se guardar o valor retirado do array, pois este método retorna ele.
const valorRemovido2 = alunos.shift();
console.log(valorRemovido2); // Saida == 'Bastos'

/* MÉTODO slice() DO ARRAY */
// Percorrerá o array no intervalo passado como argumento.
// Este método não altera nada no array, só manipula a exibição.
console.log(alunos.slice(0, 3)); // Saida == [ 'Lucas', 'Rilton', 'Otávio' ]
console.log(alunos.slice(1, 3)); // Saida == [ 'Rilton', 'Otávio' ]
console.log(alunos.slice(2, 4)); // Saida == [ 'Otávio', true ]
console.log(alunos.slice(2)); // Saida == [ 'Otávio', true, 20 ]

/* MÉTODO indexOf() e lastIndexOf() DO ARRAY */
// Retorna em qual índice do array está o elemento passado como argumento.
console.log(elementos.indexOf(90)); // Saida == 2
console.log(elementos.indexOf('Sapato')); // Saida == 0
// Retorna em qual índice do array está o elemento passado como argumento só que de trás para frente (do fim ao início do array).
console.log(elementos.lastIndexOf(90)); // Saida == 2

/* MÉTODO sort() DO ARRAY */
// Organiza o array de forma crescente.
alunos.sort();
console.log(alunos); // Saida == [ 20, 'Lucas', 'Otávio', 'Rilton', true ]
let arrayNum = [3, 8, 5, 2, 50, 9, -2];
console.log(arrayNum.sort()); // Saida == [-2, 2, 3, 5, 50, 8, 9]


/* MÉTODO instanceof() DO ARRAY */
// Retorna um valor booleano para saber se aquele elemento é uma instância de determinada classe.
console.log(alunos instanceof Array); // Saida == true
console.log(alunos instanceof String); // Saida == false
console.log(alunos instanceof(Number)); // Saida == false
