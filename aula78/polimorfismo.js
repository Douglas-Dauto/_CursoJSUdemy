/* Polimorfismo */
// Polimorfismo ou mais precisamente o polimorfismo de sobrescrita é basicamente uma substituição de um método já existente na classe pai por um na classe filha com o mesmo nome.

class Objeto {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

Pessoa.prototype.falarAtributos = function() { // Caneca usaria este método se não houvesse sobrescrita
    return `${this.nome} ${this.cor}`;
}

class Caneca extends Objeto {
    constructor(nome, cor, material) {
        super(nome, cor);
        this.material = material;
    }
}

Caneca.prototype.falarAtributos = function() { // Polimorfismo de sobrescrita
    return `${this.nome} ${this.cor} ${this.material}`;
}