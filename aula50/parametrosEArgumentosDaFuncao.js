// Em javascript não é necessário ter a mesma quantidade de argumentos que no parâmetros e vice-versa.
const andar = (vel1, vel2) => { // 2 parâmetros
    console.log(arguments); // Pode-se usar a palavra reservada arguments para obter todos os argumentos enviados.
    console.log(arguments[0]); // Pode-se percorrer cada valor como se fosse um array. // Saida == Rápido
}
andar('Rápido', 'Normal', 'Devagar'); // 3 argumentos

// OBS: A palavra reservada arguments não esta disponível em arrow function.

// Em caso de possuir mais parâmetros que argumentos o motor do javascript irá atribuir o valor undefined para os parâmetros que sobraram.
const comer = function(comidaUm, comidaDois, comidaTres) { // 3 parâmetros
    console.log(comidaUm, comidaDois, comidaTres); // Saida == Pizza Frango undefined
}
comer('Pizza', 'Frango'); // 2 argumentos


// Podemos atribuir valores padrões para os parâmetros.
function correr(velocidade = 0, distancia = 0) { // Se não for enviado argumentos, será 0.
    console.log(velocidade, distancia);
}
correr(12, 8); // Saida == 12, 8
correr(undefined, 10); // Saida == 0 10 // Se for enviado undefined, será usado o valor padrão do parâmetro.

// Pode-se usar o rest operator (...) para pegar o resto do argumentos.
// O rest operator (...) precisa ser o último parâmetro da função.
const andar = (...args) => { // rest operator
    console.log(args); // Saida == ['Rápido', 'Normal', 'Devagar']
    console.log(args[2]); // Saida == Devagar
}
andar('Rápido', 'Normal', 'Devagar');

// O rest operator (...) só pega os argumentos que não foram capturados por outros parâmetros.
const andar = (vel, ...args) => { // rest operator
    console.log(args); // Saida == ['Normal', 'Devagar']
    console.log(args[0]); // Saida == Normal
}
andar('Rápido', 'Normal', 'Devagar');

// OBS: O rest operator (...) pode fazer o papel da palavra reservada arguments em arrow functions pois funciona da mesma maneira.


// Pode-se passar objetos e arrays como argumentos de funções.
function andar({nome, sobrenome}, [num1, num2]) { // Atribuição Via Desestruturação

}
andar({nome: 'Doulas', sobrenome: 'Bastos'}, [4, 8]);