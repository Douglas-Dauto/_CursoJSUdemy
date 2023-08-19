/* Prototypes */
// Prototype é um atributo que toda classe ou função construtora possui, este atributo é um objeto contendo atributos e métodos que nós setamos nele. 
// As prototypes funcionam de uma forma parecida com a herança, elas possuem métodos e atributos que são usadas pelas classes ou funções construtoras, desta forma não precisamos criar o mesmo método para cada instância da classe ou função construtora por exemplo.
// Podemos acessar o prototype das classes e funções construtoras pelo objeto prototype, exemplo: Pessoa.prototype
// Podemos setar atributos e métodos (sendo o mais comum métodos pois é o mesmo código para todas as instâncias) no objeto prototype da classe ou função construtora, exemplo: Pessoa.prototype.atributoNome = 'Douglas'; Pessoa.prototype.metodoVerNome = function() { return atributoNome }
// As instâncias de classes e funções construtoras possuem um atributo chamado __proto__ este atributo é um link  para o prototype, ou seja, exemplo: Pessoa.prototype === pessoa.__proto__
// Cada objeto que vem de uma classe ou função construtora possui o prototype desta classe ou função construtora, porém elas também usam outros prototypes em cadeia até chegar ao prototype da classe Object (Object.prototype), mas antes de usar qualquer prototype elas usam a própria instância, exemplo: pessoa (instância) -> Pessoa.prototype -> Object.prototype
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
    }
}

criaPessoa.prototype.falaNome = function() {
    return `${nome} ${sobrenome}`;
}

const obj = criaPessoa('Douglas', 'Bastos');

console.log(obj);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.dizNome = function() { // Setando uma função no prototype
    return `${this.nome} ${this.sobrenome}`;
}

const obj2 = new Pessoa('Luana', 'Dauto');

console.log(obj2);

class Computador {
    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }
}

Computador.prototype.apresentaComputador = function() {
    return `${this.marca} ${this.tipo}`;
}

const computador = new Computador('Philips', 'Desktop');

console.log(computador);


/* Métodos setPrototypeOf() e getPrototypeOf() */
// O método setPrototypeOf() é usado para modificar o prototype de uma instância.
// sintaxe: Object.setPrototypeOf(objeto à ser modificado o prototype, prototype a ser usado);
Object.setPrototypeOf(obj, Pessoa.prototype);

// O método getPrototypeOf() é usado para obter o prototype de tal instância.
// sintaxe: Object.getPrototypeOf(objeto que deseja obter o prototype);
console.log(Object.getPrototypeOf(computador));

// Pode-se usar o corpo de uma instância como prototype de outra, exemplo:
const obj4 = {
    nome: 'Alexandre',
    sobrenome: 'Júnior'
}

const obj5 = {
    nome: 'Lieci',
    sobrenome: 'Oliveira'
}

Object.setPrototypeOf(obj5, obj4);
console.log(obj5);

// Pode-se criar um objeto e já configurar o prototype dele:
const obj6 = Object.create(Pessoa.prototype, {
    nome: {
        enumerable: true,
        configurable: false,

        get: function() {
            return this.nome;
        },

        set: function(value) {
            this.nome = value;
        }
    },

    sobrenome: {
        enumerable: true,
        configurable: false,

        get: function() {
            return this.sobrenome;
        },

        set: function(value) {
            this.sobrenome = value;
        }
    }
});