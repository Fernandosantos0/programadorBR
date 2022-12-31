const calculaIdade = (x) => {
    const data = new Date();
    const anoAtual = data.getFullYear();
    return anoAtual - x;
};

const nome = 'Fernando';
const anoNasc = 2008;
const idade = calculaIdade(anoNasc);

//Estrutura condicional
if(idade >= 18) {
    console.log(`${nome}, você pode consumi bebida alcoolica`);
    console.log(`Qual é o seu perdido?`);
} else {
    console.log(`${nome}, você não pode consumi bebida alcoolica`);
}