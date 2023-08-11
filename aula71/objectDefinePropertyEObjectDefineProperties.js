/* Métodos defineProperty() e defineProperties() da Classe Object */
// Estes métodos são usados para configurar mais precisamente as chaves dos objetos, defineProperty() configura apenas uma chave e defineProperties() configura várias chaves.

// Object.defineProperty(Objeto que deseja configurar, string com o nome da chave que deseja configurar, objeto contendo as chaves de configuração);
// Object.defineProperties(Objeto que deseja configurar, objeto contendo as chaves do objeto que deseja configurar);

class Pessoa {
    constructor(nome, sobrenome, idade, peso) {
        Object.defineProperty(this, 'nome', {
            enumerable: false, // Configura a iterabilidade da chave (se ficará visivel no for in ou Object.keys())
            value: nome, // Configura o valor da chave
            writable: false, // Configura a mudança de valor da chave (se pode modificar o valor)
            configurable: false // Configura a mudança de configuração da chave (se pode deletar a chave ou reconfigurar o defineProperty())
        });

        Object.defineProperties(this, {
            sobrenome: {
                enumerable: true,
                value: sobrenome,
                writable: false,
                configurable: false
            },

            idade: {
                enumerable: true,
                value: idade,
                writable: false,
                configurable: true
            }
        });

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

delete pessoa.sobrenome; // Não será apagada pois o configurable está como false
pessoa.idade = 40; // Não será atribuido pois o writable está como false
pessoa.peso = 80; // Uso do Setter

console.log(pessoa.peso); // Uso do Getter

const obj = {nome: 'Douglas', sobrenome: 'Bastos', idade: 22};

console.log(Object.keys(obj));