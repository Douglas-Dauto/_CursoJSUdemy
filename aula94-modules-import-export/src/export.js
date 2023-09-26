/* Export */
// Cada arquivo javascript é um módulo, módulos possuem escopo isolado uns dos outros, mas se usarmos o import e export, agora os módulos se comunicam.
// O import e export servem para importar e exportar variáveis, funções, classes e etc de um arquivo para outro.
// Para habilitarmos o import e export nos arquivos javascript precisamos indicar no arquivo package.json e/ou na tag script do html que o tipo de arquivo é um módulo.

 // No package.json: "type": "module"

 // Na tag script: type="module"

export const nome = 'Douglas'; // Pode-se exportar direto na criação.
const sobrenome = 'Bastos';

export function dizerNomeCompleto() {
    return `${nome} ${sobrenome}`;
}

function mostrarNomeCompleto() {
    return `${nome} ${sobrenome}`;
}

// Podemos exportar um dado como o padrão (geralmente uma classe), só pode existir um padrão por arquivo.
export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falarNomeCompleto() {
        return dizerNomeCompleto();
    }
}

export {sobrenome, mostrarNomeCompleto}; // Pode-se exportar depois de criar.


// Pode-se mudar o nome do dado para evitar colisão de nome no outro arquivo.
const idade = 22;

function revelarNomeCompleto() {
    return `${nome} ${sobrenome}`;
}

export {idade as idade2, revelarNomeCompleto as revelarNomeCompleto2};
