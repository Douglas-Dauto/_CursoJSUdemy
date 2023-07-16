/* FUNÇÕES GERADORAS */
// São funções que entregam valores por step (cada vez que chamar a função geradora ela irá entregar um valor).
// As funções geradoras precisam de um * na palavra function.
// As funções geradoras precisam ser armazenadas em uma variável para poder entregar os outros valores.
function* geradoraUm() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradoraUm();

console.log(g1.next().value); // O método next() passa para o próximo valor e o atributo value é o valor em si.  // Saida == Valor 1
console.log(g1.next().value); // Saida == Valor 2
console.log(g1.next().value); // Saida == Valor 3


function* geradoraDois() {
    yield 0;
    yield 1;
    yield 2;
}

// Pode-se delegar um yield para outra função geradora, para isto usa-se o *.
function* geradoraTres() {
    yield* geradoraDois(); // Este yield retornará 3 vezes.
    yield 3;
    yield 4;
    yield 5;
    yield function() { // Pode-se usar funções nos yields.
        return 6;
    }
}

const g3 = geradoraTres();

console.log(g3.next().value); // Saida == 0
console.log(g3.next().value); // Saida == 1
console.log(g3.next().value); // Saida == 2
console.log(g3.next().value); // Saida == 3
console.log(g3.next().value); // Saida == 4
console.log(g3.next().value); // Saida == 5

const yieldSete = g3.next().value; // Saida == [Function (anonymous)]
console.log(yieldSete()); // Saida == 6

// Pode-se iterar sobre as funções geradoras.
for(let valor of g3) {
    console.log(valor);
}

// Pode-se fazer geradoras infinitas usando estrutura de repetição.
function* geradoraQuatro() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g4 = geradoraQuatro();

console.log(g4.next().value); // Saida == 0
console.log(g4.next().value); // Saida == 1
console.log(g4.next().value); // Saida == 2
console.log(g4.next().value); // Saida == 3
console.log(g4.next().value); // Saida == 4
console.log(g4.next().value); // Saida == 5
