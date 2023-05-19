let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

let aux;

aux = a;
a = b;
b = c;
c = aux;

console.log(a, b, c);

// ou 

a = 'A'; // B
b = 'B'; // C
c = 'C'; // A

[a, b, c] = [b, c, a]; // Desta forma não precisa criar uma variável auxiliar

console.log(a, b, c);