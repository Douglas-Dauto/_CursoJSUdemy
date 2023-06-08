/* É basicamente um if e else encurtado e que pode ser atribuido a uma variável. */
// (condição)?Valor verdadeiro:Valor falso;
let pontosUsuario = 999;
let nivelUsuario = (pontosUsuario >= 1000)?'Usuário VIP':'Usuário Normal';
console.log(nivelUsuario); // Saida == Usuário Normal

// Pode-se remover os parêntesis da condição caso esteja em apenas uma linha.
pontosUsuario = 1000;
nivelUsuario = pontosUsuario >= 1000?'Usuário VIP':'Usuário Normal';
console.log(nivelUsuario); // Saida == Usuário VIP

// A operação ternária substitui uma estrutura if e else simples.
// if(pontosUsuario >= 1000) {
//     nivelUsuario = 'Usuário VIP';
// } else {
//     nivelUsuario = 'Usuário Normal';
// }
