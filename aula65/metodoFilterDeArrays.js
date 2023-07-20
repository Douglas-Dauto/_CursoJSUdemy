// Este método é usado para filtrar um array com apenas os valores que queremos.
// Este método requer uma função de callback que retorne um valor booleano, true quando queremos incluir o valor e false para quando não queremos.
// O método filter não edita o array original, apenas retorna um novo array.

const arrayNumeros = [80, 20, 10, 7, 8, 14, 29, 31, 9];

// A função de callback pode conter 3 parâmetros, valor, indice e o array completo. Os argumentos são passados automaticamente pela função filter.
let novoArray = arrayNumeros.filter(function(valor, indice, array) {
    if(valor > 10) {
            return true;
    } else {
            return false;
    }
});

console.log(novoArray); // Saida == [80, 20, 14, 29, 31]

// Ao invés de retornarmos true ou false literalmente, podemos retornar a própria condição, ela já retornará um  valor booleano.
// Podemos omitir os parâmetros da função de callback se não formos utiliza-las.
// Podemos utilizar arrow functions.
novoArray = arrayNumeros.filter((valor) => valor > 10); // Ou é true ou é false

console.log(novoArray); // Saida == [80, 20, 14, 29, 31]


// Veja este exemplo utilizando objetos e métodos de strings:
const arrayObjetos = [{nome: 'Douglas', sobrenome: 'Dauto Bastos'}, {nome: 'Lieci', sobrenome: 'Oliveira Dauto'}];

novoArray = arrayObjetos.filter((obj) => obj.nome.toLowerCase().includes('lie'));

console.log(novoArray); // Saida == [{nome: 'Lieci', sobrenome: 'Oliveira Dauto'}]


const arrayStrings = ['Douglas', 'Dauto', 'Bastos', 'Lieci', 'Oliveira', 'Dauto'];

novoArray = arrayStrings.filter((valor) => valor.length >= 7);

console.log(novoArray);

novoArray = arrayStrings.filter((valor) => valor === 'Dauto');

console.log(novoArray);

novoArray = arrayStrings.filter((valor) => valor.toLowerCase().endsWith('s'));

console.log(novoArray);

novoArray = arrayStrings.filter((valor) => valor.toLowerCase().indexOf('dou') === 0);

console.log(novoArray);

novoArray = arrayStrings.filter((valor) => valor.toLowerCase().includes('ci'));

console.log(novoArray);


const arrayNovo = [];

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

arrayNovo.push(new Pessoa('Douglas', 'Dauto Bastos'));
arrayNovo.push(new Pessoa('Lieci', 'Oliveira Dauto'));

console.log(arrayNovo.filter((obj) => obj.nome.toLowerCase().includes('lie')));
