/* Herança com Prototypes */
function Produto(nome, marca) {
    this.nome = nome;
    this.marca = marca;
}

Produto.prototype.verNomeEMarca = function() {
    return `${this.nome} ${this.marca}`;
}

function Caneca(nome, marca, cor) {
    Produto.call(this, nome, marca); // simula o super.
    this.cor = cor;
}

Caneca.prototype = Object.create(Produto.prototype); // Linkando o prototype da função que será a pai na função filha.
Caneca.prototype.constructor = Caneca; // Quando linkamos o prototype, perde-se a referência do construtor, esse código resolve.

const caneca = new Caneca('Caneca', 'Dubai', 'Dourado');

console.log(caneca); // Saida == Caneca { nome: 'Caneca', marca: 'Dubai', cor: 'Dourado' }


// OBS: Ao utilizar classes e herança entre classes ao invés destes métodos, você está fazendo a mesma coisa por baixo dos panos.