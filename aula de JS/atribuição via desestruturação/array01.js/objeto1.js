const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Santos',
    idade: 22,
    endereco: {
        rua: 'Rua Antônio Caetano Alves',
        bairro: 'Cruzeiro do Sul',
        cidade: 'Nova Iguaçu',
        estado: 'RJ',
        numeroDaCasa: 000
    },
    nacionalidade: 'Brasileiro nato'
};

//Atribuição via desestruturação em JS
const { nome: name = '', sobrenome: sname = '', idade: age = 0, endereco: { rua: r = '', bairro: b = '', cidade: city = 'Não informado', estado: federacao = 'Não informado' } } = pessoa;

const nomeCompleto = `${pessoa['nome']} ${pessoa['sobrenome']}`;

console.log(nomeCompleto);

console.log(`${name} ${sname}`);