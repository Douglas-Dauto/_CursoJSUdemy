const numero = Number(window.prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `A raiz quadrada do seu texto é ${Math.sqrt(numero)}<br>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br>`;
texto.innerHTML += `${numero} é NaN: ${Number.isNaN(numero)}<br>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br>`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br>`;
texto.innerHTML += `Com duas casas decimais: ${(numero.toFixed(2))}<br>`;
