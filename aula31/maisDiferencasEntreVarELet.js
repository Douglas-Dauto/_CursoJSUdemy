// Var tem escopo de função apenas. Em var acontece o hosting, ou seja, a declaração é elevada para o topo do arquivo, mas a atribuição continua na linha onde foi escrita. (caso seja usada antes da atribuição, seu valor será undefined)
// Let tem escopo de bloco, ou seja, qualquer chaves {}. Em let não ocorre o hosting e o programa dará erro caso seja declarada depos de usada.
const bool = true;

var nome = 'Douglas'; // Declarando
let nome2 = 'Bastos'; // Declarando

if(bool) {
    var nome = 'Luana'; // Redeclarando
    let nome2 = 'Dauto'; // Declarando
}

console.log(nome, nome2); // Saida == Luana Bastos

function protegeVarELet() {
    var nome = 'Alexandre'; // Declarando
    let nome2 = 'Carvalho'; // Declarando

    console.log(nome, nome2); // Saida == Alexandre Carvalho
}

console.log(nome, nome2); // Saida == Luana Bastos

/* Hosting de Var */
// Em var acontece o hosting, ou seja, a declaração é elevada para o topo do arquivo, mas a atribuição continua na linha onde foi escrita. (caso seja usada antes da atribuição, seu valor será undefined)
console.log(nome3); // Saida == undefined
var nome3 = 'Lieci';
