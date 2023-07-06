// Declaração de função clássica (Ocorre o Function Hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class Object (Objeto de Primeira Classe)
// Function Expression
const souUmDado = function() {
  console.log('Sou um dado.')  
};

executaFuncao(souUmDado);
function executaFuncao(funcao) {
    funcao();
}

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
};
funcaoArrow();

// Em Objetos
const obj = {
    falar() {
        console.log('Estou falando...');
    },
    // ou
    comer: function() {
        console.log('Estou comendo...');
    }
};
obj.falar();
obj.comer();
