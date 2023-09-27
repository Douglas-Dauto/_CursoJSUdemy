export default class GeradorSenha {
    constructor() {
        this.mudarValor();
    }

    mudarValor() {
        this.caracteres = window.document.querySelector('#caracteres').value;
        this.numbers = window.document.querySelector('#numbers').checked;
        this.upper = window.document.querySelector('#upper').checked;
        this.lower = window.document.querySelector('#lower').checked;
        this.symbol = window.document.querySelector('#symbol').checked;
    }

    gerarSenha() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const symbol = ['!', '@', '#', '$', '%', '^', '&', '*',]
        const upper = [];
        const lower = [];

        for(let letra = 65; letra <= 90; letra++) {
            upper.push(String.fromCharCode(letra));
        }

        for(let letra = 97; letra <= 122; letra++) {
            lower.push(String.fromCharCode(letra));
        }
        
        const elementsChecked = [];

        if(this.numbers) {
            elementsChecked.push({numbers, name: 'numbers'});
        }

        if(this.symbol) {
            elementsChecked.push({symbol, name: 'symbol'});
        }

        if(this.upper) {
            elementsChecked.push({upper, name: 'upper'});
        }

        if(this.lower) {
            elementsChecked.push({lower, name: 'lower'});
        }

        let senha = ''

        if(elementsChecked.length > 0) {
            for(let i = 0; i < this.caracteres; i++) {
                const randUm = numeroAleatorio(elementsChecked.length);
                let randDois;
    
                switch(elementsChecked[randUm].name) {
                    case 'numbers':
                        randDois = numeroAleatorio(numbers.length);
                        break;
                    case 'symbol':
                        randDois = numeroAleatorio(symbol.length);
                        break;
                    case 'upper':
                        randDois = numeroAleatorio(upper.length);
                        break;
                    case 'lower':
                        randDois = numeroAleatorio(lower.length);
                        break;
                }
    
                senha += elementsChecked[randUm][elementsChecked[randUm].name][randDois];
            }
    
            function numeroAleatorio(max) {
                return Math.floor(Math.random() * max);
            }

            return senha;
        }

        return '';
    }

    mostraSenha() {
        const resultadoSenha = window.document.querySelector('.senha');

        resultadoSenha.innerHTML = this.gerarSenha();
    }
}