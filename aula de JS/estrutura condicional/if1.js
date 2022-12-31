const calcularIdade = function(x) { //Função anônima
    const data = new Date();
    const anoAtual = data.getFullYear();
    return anoAtual - x;
};

const nome = 'Fernando';
const anoNasc = 2000;
const idade = calcularIdade(anoNasc);

//Estrutura condicional 
if(idade > 15 && idade <= 17 || idade > 64) {
    console.log(`${nome}, pela sua idade seu voto é opcional /n Idade: ${idade}`);
} else if(idade >= 18 && idade <= 64) {
    console.log(`${nome}, pela sua idade seu voto é obrigatório /n Idade: ${idade}`);
} else {
    console.log(`${nome}, você não possui a idade suficiente para vota /n Idade: ${idade}`);
}