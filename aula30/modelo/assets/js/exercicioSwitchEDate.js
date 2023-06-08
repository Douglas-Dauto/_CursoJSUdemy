const data = new Date();
const texto = document.getElementsByTagName('h1')[0];

const formatarData = (valor) => {
    return valor >= 10?valor:`0${valor}`;
}

const diaSemana = (Semana) => {
    switch(Semana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sabádo';
    }
}

const mesAno = (mes) => {
    const mesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mesAno[mes];
}

texto.innerHTML = `${diaSemana(data.getDay())}, ${formatarData(data.getDate())} de ${mesAno(data.getMonth())} de ${data.getFullYear()} ${formatarData(data.getHours())}:${formatarData(data.getMinutes())}`;

// Método do objeto date que faz a mesma coisa.
// texto.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
