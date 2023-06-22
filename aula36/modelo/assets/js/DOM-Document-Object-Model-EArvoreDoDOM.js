/* 
    DOM - Document Object Model
    O DOM é um conjunto de objetos aninhados que são utilizados para manipular os elementos HTML.

    O objeto que está dentro de outro é child ou filho daquele outro, quem tem objetos dentro de si é parent ou pai ou mãe daque objeto.
    Um objeto pode ser ao mesmo tempo parent ou pai ou mãe e também child ou filho.
    window é o topo da árvore do DOM, tudo está dentro dele e ele não é child ou filho de nenhum objeto.
*/

// Podemos selecionar elementos HTML das seguintes formas: 
const container = document.querySelector('#container'); // Por seletor (apenas o primeiro elemento)
const container2 = document.querySelectorAll('div#container')[0]; // Por seletor (apenas o elemento passado no índice)
const container3 = document.getElementById('container'); // Por ID do elemento 
const container4 = document.getElementsByClassName('container')[0]; // Por classe do elemento (apenas o elemento passado no índice)
const container5 = document.getElementsByTagName('div')[0]; // Pelo nome da tag do elemento (apenas o elemento passado no índice)
const container6 = document.getElementsByName('container')[0]; // Pelo atributo name do elemento (apenas o elemento passado no índice)
// OBS: Os métodos no plural precisa do índice e nada impede que o índicie seja passado dinâmicamente para selecionar todos os elementos.
// Os índices destes métodos faz referência a uma nodeList e não a um array.


const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for(let i in elementos) {
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag); // Podemos criar elementos HTML com o método createElement(), mas ele apenas cria, para inserir no documento pracisa de outro método.
    const textoCriado = document.createTextNode(texto); // O método createTextNode() cria um texto node para ser adicionado dentro de uma tag.
    tagCriada.appendChild(textoCriado);
    container.appendChild(tagCriada); // O método appendChild() adiciona a tag criada no documento, ele sempre adionará no final dos elementos.
}

// Podemos ao invés de usar os métodos acima, usar atributos do DOM:
for(let i in elementos) {
    const {tag, texto} = elementos[i];
    container.innerHTML += `<${tag}>${texto}<${tag}/>`; // O innerHTML aceita o texto e as tags.
    container.innerText += `<${tag}>${texto}<${tag}/>`; // O innerText aceita apenas o texto, se vc usar tags, será mostrada para o usuário.
}


// Podemos utilizar o objeto style da árvore DOM para adicionar estilos CSS diretamente no elemento.
const h1 = document.getElementById('h1');

h1.style.backgroundColor = 'red';
h1.style.display = 'flex';
h1.style.justifyContent = 'center';
h1.style.padding = '20px';


// Pode-se adicionar eventos DOM em elementos HTML:
h1.addEventListener('click', mudarTexto); // Evento de click

function mudarTexto() {
    h1.innerText = 'Texto alterado!';
}

// Pode-se usar funções anônimas diretamente como argumentos: 
h1.addEventListener('dblclick', () => { // Evento de double-click
    h1.style.backgroundColor = 'red';
});

/*
    https://developer.mozilla.org/pt-BR/docs/Web/Events
*/
