/* Método map() de Arrays*/
// Este método é usado para criar um novo array com os valores modificados.
// Este método usa o array original como base para criar um novo array.
// Este método requer uma função de callback que retorne o novo valor para ficar no lugar do valor original.

const array = [{nome: 'Douglas', sobrenome: 'Dauto Bastos'}, {nome: 'Lucas', sobrenome: 'Oliveira Daltro'}];

// A função de callback pode conter 3 parâmetros, valor, indice e o array completo. Os argumentos são passados automaticamente pela função filter.
let novoArray = array.map(function(valor, indice, array) {
	return `Modificado: ${valor.nome}`; // Novo valor que substituirá o original
});

console.log(novoArray); // Saida == [ 'Modificado: Douglas', 'Modificado: Lucas' ]

// Podemos omitir os parâmetros da função de callback se não formos utiliza-las.
// Podemos utilizar arrow functions.
novoArray = array.map((obj, indice) => ({nome: obj.nome, sobrenome: obj.sobrenome, id: indice}));

console.log(novoArray); // Saida == [{ nome: 'Douglas', sobrenome: 'Dauto Bastos', id: 0 }, { nome: 'Lucas', sobrenome: 'Oliveira Daltro', id: 1 }]

// Como objetos são valores passados por referência, para obtermos uma cópia usamos o spread operator.
// O retorno da função de callback agora é a cópia do objeto e não mais a referência.
novoArray = array.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice; // Podemos criar chaves novas para o objeto desta forma.
    return newObj;
});

console.log(array); // Saida == [{ nome: 'Douglas', sobrenome: 'Dauto Bastos' }, { nome: 'Lucas', sobrenome: 'Oliveira Daltro' }]
console.log(novoArray); // Saida == [{ nome: 'Douglas', sobrenome: 'Dauto Bastos', id: 0 }, { nome: 'Lucas', sobrenome: 'Oliveira Daltro', id: 1 }]

// Desta forma estamos modificando o objeto original.
novoArray = array.map(function(obj, indice) {
    obj.id = indice; // Valor passado por referência.
    return obj;
});

console.log(array); // Saida == [{ nome: 'Douglas', sobrenome: 'Dauto Bastos', id: 0 }, { nome: 'Lucas', sobrenome: 'Oliveira Daltro', id: 1 }]
console.log(novoArray); // Saida == [{ nome: 'Douglas', sobrenome: 'Dauto Bastos', id: 0 }, { nome: 'Lucas', sobrenome: 'Oliveira Daltro', id: 1 }]
