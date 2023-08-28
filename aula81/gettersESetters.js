/* Getters e Setters */
// São métodos assessores que protegem a propriedade do objeto.

let velocidadePrivada; // Esta variável é nessessária pois se chamarmos this.velocidade dentro do getter e setter, gerará um loop infinito.

class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;

        velocidadePrivada = this.velocidade;
    }

    acelerar() {
        if(velocidadePrivada >= 100) return;
        velocidadePrivada++;
    }

    desacelerar() {
        if(velocidadePrivada <= 0) return;
        velocidadePrivada--;
    }

    get velocidade() { // Getter (Pega o valor).
        return velocidadePrivada;
    }

    set velocidade(valor) { // Setter (Configura o valor).
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        velocidadePrivada = valor;
    }
}

const carro = new Carro('Fusca');

carro.velocidade = 90; // Uso do Setter
carro.velocidade; // Uso do Getter

carro.acelerar();

console.log(carro);


// Exemplo usado defineProperty: 
// OBS: Utilize sempre que possivel desta forma.

class CarroDois {
    constructor(nome) {
        this.nome = nome;
        let velocidadePrivada = 0;
        
        Object.defineProperty(this, 'velocidade', {
            enumerable: true,
            configurable: false,

            get: function() {
                return velocidadePrivada;
            },

            set: function(valor) {
                if(typeof valor !== 'number') return;
                if(valor >= 100 || valor <= 0) return;
                velocidadePrivada = valor;
            }
        });
    }

    acelerar() {
        if(velocidadePrivada >= 100) return;
        this.velocidade++;
    }

    desacelerar() {
        if(velocidadePrivada <= 0) return;
        this.velocidade--;
    }
}

const carroDois = new CarroDois('FuscaDois');

carroDois.velocidade = 90; // Uso do Setter
carroDois.velocidade; // Uso do Getter

carroDois.acelerar();

console.log(carroDois);