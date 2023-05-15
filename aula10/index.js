// string, number, undefined, null, boolean
const nome = "Luiz"; // string
const nome1 = 'Luiz'; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined, apenas o JS pode aplicar esse valor, também não aponta para local nenhum na memória
const sobrenomeAluno = null; // nulo, não aponta para local nenhum na memória
const aprovado = false; // boolean, true ou false (valor lógico)


let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
