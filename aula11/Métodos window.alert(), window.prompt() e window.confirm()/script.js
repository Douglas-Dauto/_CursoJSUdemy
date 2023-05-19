// Exibe uma mensagem e não retorna nada (undefined)
window.alert("Olá"); // ou
alert("Oi");

// Exibe uma mensagem e retorna um valor booleano
window.confirm("Deseja confirmar?"); // ou
confirm("Qual sua escolha?");

// Exibe uma mensagem e retorna o valor digitado pelo usuário como uma string
window.prompt("Digite seu nome:"); // ou
prompt("Qual sua idade?");


// Para capturar o retorno da função basta armazenala em uma variável ou constante
const valorBoole = window.confirm("Deseja confirmar?");
let valorString = window.prompt("Digite seu nome:");


document.body.innerHTML = `<p>Resultado do confirm: ${valorBoole}</p>`
document.body.innerHTML += `<p>Resultado do prompt: "${valorString}"</p>`
