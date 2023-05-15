console.log("Olá mundo!"); // será exibido no console do navegador e no terminal do node por exemplo.
console.log("Este trecho será exibido fora do navegador.");
window.alert("Olá mundo!"); // alert não será executado no terminal pois não possui elementos DOM


/*
  O terminal do console do navegador pode executar qualquer código JS, mas os terminais fora de lá como o node tem limitações pois não possuem a árvore DOM.
*/