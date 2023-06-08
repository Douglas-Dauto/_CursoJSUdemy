/* Objeto Date */
// O objeto date serve para obtermos datas, horas, mês... específicos e até mesmo a data atual dinâmicamente.

// Quando criamos um objeto date sem parâmetros no construtor estamos obtendo a data atual no momento da execução.
const data = new Date();
console.log(data); // Saida == 2023-06-08T13:32:10.656Z
console.log(data.toString()); // Saida == Thu Jun 08 2023 10:35:16 GMT-0300 (Horário Padrão de Brasília)

// Podemos obter uma data especifica passando numbers como argumentos.
console.log(new Date(2019, 4, 20, 15, 18, 27, 800)); // Saida == 2019-05-20T18:18:27.800Z
            // ano, mês, dia, horas, minutos, segundos, milisegundos
// Nós podemos omitir argumentos apartir do dia pra frente, neste caso ele será 0.
console.log(new Date(2019, 4, 20, 15, 18, 27)); // Saida == 2019-05-20T18:18:27.000Z
console.log(new Date(2019, 4, 20, 15, 18)); // Saida == 2019-05-20T18:18:00.000Z
console.log(new Date(2019, 4)); // Saida == 2019-05-01T03:00:00.000Z

// Ainda podemos obter uma data específica passando uma string como argumento.
console.log(new Date('2020-04-12 23:45:21.800')); // Saida == 2020-04-13T02:45:21.800Z
// ou 
console.log(new Date('2020-04-12T23:45:21.800')); // Saida == 2020-04-13T02:45:21.800Z
// Neste formato também é possivel omitir valores.
// OBS: Tanto em string quanto em numbers, caso os milisegundos passem de 999, será somado aos segundos.

/* Timestamp ou Época unix (marco 0 dos milisegundos) */
// Representa o início da contagem dos milisegundos.
console.log(new Date(0)); // Saida == 1970-01-01T00:00:00.000Z
// valores negativos são data (milisegundos) antes da época unix e valores positivos datas (milisegundos) posteriores.
console.log(new Date(1)); // Saida == 1970-01-01T00:00:00.001Z
console.log(new Date(-1)); // Saida == 1969-12-31T23:59:59.999Z

/* Cálculo matemático para somar e subtrair horas */
const meiaHora = 60 * 30 * 1000;
const umaHora = 60 * 60 * 1000;
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
// OBS: o * 1000 é porque temos que obter o valor em milisegundos pois o objeto date trabalha com essa unidade.

console.log(new Date(0 + tresHoras)); // Saida == 1970-01-01T03:00:00.000Z

/* Métodos do objeto date */
console.log(`Dia: ${data.getDate()}`); // Dia
console.log(`Mês: ${data.getMonth() + 1}`); // Mês // +1 porque começa em 0 e não em 1
console.log(`Ano: ${data.getFullYear()}`); // Ano
console.log(`Hora: ${data.getHours()}`); // Horas
console.log(`Min: ${data.getMinutes()}`); // Minutos
console.log(`Seg: ${data.getSeconds()}`); // Segundos
console.log(`Ms: ${data.getMilliseconds()}`); // Milisegundos
console.log(`Dia Semana: ${data.getDay()}`); // Dia na semana // 0 - Domingo e 6 - Sabádo

/* Exemplo de função para formatar uma data */
function formatarData(data) {
    return data >= 10?data: `0${data}`;
}

console.log(`${formatarData(data.getDate())}/${formatarData(data.getMonth() + 1)}/${formatarData(data.getFullYear())} ${formatarData(data.getHours())}:${formatarData(data.getMinutes())}:${formatarData(data.getSeconds())}`);
