/* Axios */
// É usado para enviar e obter dados do back-end.
// Para usar o axios é preciso instalar via cdn ou node.
// O axios retorna uma promise.

// Importação do axios no documento.
const { default: axios } = require("axios");


// Requisição get.
axios.get('http://viacep.com.br/ws/40713030/json').then((resposta) => mostrarNaTela(resposta.data));

function mostrarNaTela(dados) {
    console.log(dados);
}