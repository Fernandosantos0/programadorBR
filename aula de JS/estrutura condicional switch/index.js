//Função - para inserir o dia da semana 
function semanas(x) {
    const diasDaSemana = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    return diasDaSemana[x];
}

//Função - para inserir o mês atual
function meses(x) {
    const mesesDoAno = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    return mesesDoAno[x];
}

//Função - para inserir o resultado
function msg(semana,dia,mes,ano,hora,minuto) {
    console.log(`${semana} - ${dia} de ${mes} de ${ano}`);
    console.log(`${hora}:${minuto}`);
}

const data = new Date();

//Data
const getSemana = data.getDay();
const getDia = data.getDate();
const getMes = data.getMonth();
const getAno = data.getFullYear();

//Hora
const getHora = data.getHours();
const getMinuto = data.getMinutes();

//Chamando uma função para inserir o dia da semana e o mês em texto, e armazenando em uma variável
const textSemana = semanas(getSemana);
const textMes = meses(getMes);

msg(textSemana,getDia,textMes,getAno,getHora,getMinuto);