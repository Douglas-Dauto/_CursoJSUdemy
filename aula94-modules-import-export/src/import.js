/* Import */
// Cada arquivo javascript é um módulo, módulos possuem escopo isolado uns dos outros, mas se usarmos o import e export, agora os módulos se comunicam.
// O import e export servem para importar e exportar variáveis, funções, classes e etc de um arquivo para outro.
// Para habilitarmos o import e export nos arquivos javascript precisamos indicar no arquivo package.json e/ou na tag script do html que o tipo de arquivo é um módulo.

 // No package.json: "type": "module"

 // Na tag script: type="module"

// Importando 
import {nome, sobrenome, dizerNomeCompleto, mostrarNomeCompleto} from "./export.js"; // Necessário o .js no final.

// Importando o padrão (não precisa das chaves)
import Pessoa from "./export.js"; // Necessário o .js no final.

// Importando todos de uma vez
// import Pessoa, {nome, sobrenome, dizerNomeCompleto, mostrarNomeCompleto} from "./export.js"; // Necessário o .js no final.

console.log(dizerNomeCompleto());
console.log(mostrarNomeCompleto());

const pessoa = new Pessoa(nome, sobrenome);

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.falarNomeCompleto());

// Pode-se mudar o nome do dado para evitar colisão de nome no arquivo.
import {idade2 as idade3, revelarNomeCompleto2 as revelarNomeCompleto3} from "./export.js";

console.log(revelarNomeCompleto3());
console.log(idade3);

// Pode-se importar tudo que está sendo exportado de uma vez também
import * as MeuModulo from "./export.js";

console.log(MeuModulo.mostrarNomeCompleto());
console.log(MeuModulo.idade2);
console.log(MeuModulo.nome);
console.log(MeuModulo.dizerNomeCompleto());
