// O closure está relacionado com o escopo léxico.
// O closure é a habilidade da função acessar seu escopo léxico e fecha-lo.

function funcao(nome) {
    console.log(nome); 
}
funcao('Douglas'); // Aqui é onde ocorre o closure pois a função está fechando o escopo dela com esse valor e não será mais alterado.
