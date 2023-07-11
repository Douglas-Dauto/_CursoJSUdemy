// O escopo léxico basicamente é o local onde a função foi declarada, sempre que vc chamar a função, ela lembrará de seu código e do código dos seus vizinhos.
// O escopo léxico é como se fosse várias bolhas que quando precisam, estouram-se de dentro para fora para chegar no vizinho.

// Exemplo um:

let nome = 'Douglas';

function funcaoUm() {
    function funcaoDois() {
		console.log(nome); // nome só existe no escopo global então será usado de lá.
		// Saida == Douglas
 	}
}

// Exemplo dois:

nome = 'Douglas';

function funcaoUm() {
	let nome = 'Bastos';

 	function funcaoDois() {
		console.log(nome); // nome existe no escopo global e no escopo da primeira função, então será usada a da funçãoUm.
 	}	// Saida == Bastos
}

// Exemplo três:

nome = 'Douglas';

function funcaoUm() {
	let nome = 'Bastos';

 	function funcaoDois() {
		let nome = 'Dauto';

		console.log(nome); // nome existe nos três escopos, então será usada a da funçãoDois.
 	}	// Saida == Dauto
}
