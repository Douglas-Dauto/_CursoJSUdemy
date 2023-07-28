/* Método forEach() de Arrays */
// Este método é utilizado para fazer laços de repetição em arrays.
// Este método requer uma função de callback como argumento.

const array = [5, 20, 42, 24, 4, 22, 84, 63, 55];

array.forEach(function(valor, indice, array) {
    console.log(valor, indice, array); // O código sera repetido igual a estrutura for
});
