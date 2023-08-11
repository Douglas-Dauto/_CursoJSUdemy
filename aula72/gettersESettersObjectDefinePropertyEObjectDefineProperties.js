class Pessoa {
    constructor(nome, sobrenome, idade, peso) {
        // Pode-se usar Getters e Setters dento do defineProperty() ou defineProperties()
        // Usando Getters e Setters pode-se eliminar as chaves value e writable pois o Setter já irá cuidar dessas configurações.
        // Importante dizer que o Setter não tem controle do valor que chega pelo construtor, somente pela atribuição.
        Object.defineProperty(this, 'peso', {
            enumerable: true,
            configurable: false,

            get: function() {
                return peso;
            },

            set: function(value) {
                if(typeof value !== 'number') return;
                peso = value;  
            }
        });
    }
}

const pessoa = new Pessoa('Douglas', 'Bastos', 22, '90');

pessoa.peso = 80; // Uso do Setter
console.log(pessoa.peso); // Uso do Getter