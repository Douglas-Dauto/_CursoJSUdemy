/* Fetch Api */
// É usado para enviar e obter dados do back-end.
// O fetch retorna uma promise.

fetch('http://viacep.com.br/ws/40713030/json') // fetch(url, objeto com os valores (caso seja POST))
    .then((resposta) => resposta.json()) // Convertendo o valor para json (retorna uma promise)
    .then((json) => console.log(json)); // Exibindo o valor


fetch('http://viacep.com.br/ws/40713030/json') // fetch(url, objeto com os valores (caso seja POST))
    .then((resposta) => resposta.text()) // Convertendo o valor para texto (retorna uma promise)
    .then((texto) => console.log(texto)); // Exibindo o valor

