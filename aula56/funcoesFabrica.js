// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const pessoa1 = criaPessoa('Douglas', 'Dauto Bastos', 1.70, 50);
const pessoa2 = criaPessoa('Luana', 'Dauto Bastos', 1.60, 40);
console.log(pessoa1.imc);
console.log(pessoa2.imc);
console.log(pessoa1.nomeCompleto);
console.log(pessoa2.nomeCompleto);
