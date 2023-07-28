/* filter+map+reduce (encadeando os métodos) */
// Pode-se usar todos os métodos de uma vez só.

const array = [5, 20, 42, 24, 4, 22, 84, 63, 55];

const somaDoDobroDosPares = array.filter((value) => value % 2 === 0).map((value) => value * 2).reduce((acumulator, value) => acumulator += value);

console.log(somaDoDobroDosPares);
