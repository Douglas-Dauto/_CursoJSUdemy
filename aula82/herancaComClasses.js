/* Herança com Classes */
// A herança serve para reaproveitarmos código de outras classes e criarmos ligação entre as classes.
// OBS: Tudo que DispositivoEletronico tem, Smartphone tem através da herança.

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // extends faz a herança.
    constructor(nome, cor, modelo) {
        super(nome); // Chama o construtor da classe pai.
        this.cor = cor;
        this.modelo = modelo;
    }
}

const smartphone = new Smartphone('Samsung', 'preto', 'A10');
smartphone.ligar();
smartphone.desligar();