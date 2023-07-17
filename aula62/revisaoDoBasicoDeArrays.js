const array = ['Douglas', 'Dauto', 'Bastos'];

array.pop();
array.shift();
array.push('Luana');
array.unshift('Júnior');

const arrayDois = array;

delete arrayDois[1];

const arrayTres = [...arrayDois];

const arrayQuatro = new Array('Lieci', 'Oliveira', 'Dauto');

const arrayCinco = arrayQuatro.slice(1, 3);
