class validaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            enumerable: true,
            writable: false,
            configurable: false
        });
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digitoUm = validaCpf.geraDigito(cpfSemDigitos);
        const digitoDois = validaCpf.geraDigito(cpfSemDigitos + digitoUm);
        this.novoCpf = cpfSemDigitos + digitoUm + digitoDois;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0, reverso = cpfSemDigitos.length +1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9? String(digito):'0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo;
    }
}

const cpf = new validaCpf('070.987.720-03');

if(cpf.valida()) {
    console.log("CPF válido!");
} else {
    console.log("CPF inválido!");
}
