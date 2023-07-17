/* MÉTODO splice() */
// Este método é usado para adicionar ou remover elementos do array.

const array = ['Douglas', 'Dauto', 'Bastos'];

// splice(índice onde vai começar ser deletado ou adicionado elemento, quantos elementos vai ser deletados, adicionar elem1, adicionar elem2, adicionar elem3, ...)
// Resumido: splice(índice, delete, elem1, elem2, elem3, ...)
array.splice(1, 0, 'Luan', 'Lieci', 'Júnior');

// O método splice() retorna um array com os elementos removidos.
const removidos = array.splice(4, 2);
console.log(removidos); // Saida == [ 'Dauto', 'Bastos' ]

/* SIMULANDO OUTROS MÉTODOS */
array.splice(array.length -1, 1); // pop()
array.splice(array.length, 0, 'Lucas'); // push()
array.splice(0, 1); // shift()
array.splice(0, 0, 'Alexandre'); // unshift()

console.log(array); // Saida == [ 'Alexandre', 'Luan', 'Lieci', 'Júnior', 'Dauto', 'Lucas' ]
