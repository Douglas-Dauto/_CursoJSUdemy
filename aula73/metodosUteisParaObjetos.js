const obj = {nome: 'Douglas', sobrenome: 'Bastos', idade: 22};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const objDois = Object.assign({}, obj);

console.log(objDois);

class Pessoa {
    constructor(nome, sobrenome) {
        Object.defineProperties(this, {
            nome: {
                writable: false,
                configurable: false,
                enumerable: false,
                value: nome
            },

            sobrenome: {
                writable: false,
                configurable: false,
                enumerable: false,
                value: sobrenome
            }
        });
    }
}

const pessoa = new Pessoa('Luana', 'Dauto');

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'));
console.log(Object.getOwnPropertyDescriptors(pessoa));