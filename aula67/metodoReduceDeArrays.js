/* Método reduce() de Arrays */
// Este método é utilizado quando queremos reduzir o array em um único valor.
// Este método requer uma função de callback que retorne o valor a ser adicionado ao acumulador.
// O método reduce não edita o array original.

const array = [5, 20, 42, 24, 4, 22, 84, 63, 55];

// O acumulador é a variável que será usada para entregar o valor final.
// O acumulador por padrão assume o valor do primeiro elemento do array e o value o segundo.
// Pode-se enviar um segundo argumento no método reduce que será usado como valor inicial para o acumulador, sendo assim, value terá o valor do primeiro elemento do array e não mais do segundo.
const total = array.reduce((acumulator, value, index, array) => {
    acumulator += value;
    return acumulator;
}, 0);

console.log(total); // Saida == 319

const obj = [{nome: 'Douglas', idade: 22}, {nome: 'Alexandre', idade: 42}, {nome: 'Lieci', idade: 32}, {nome: 'Luana', idade: 20}, {nome: 'Júnior', idade: 21}];

const pessoaMaisVelha = obj.reduce((acumulator, value) => {
    if(acumulator.idade > value.idade) return acumulator;
    return value;
});

console.log(pessoaMaisVelha); // Saida == { nome: 'Alexandre', idade: 42 }
