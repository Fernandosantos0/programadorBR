const cidades = ['São paulo', 'Rio de Janeiro', 'Manaus', 'Recife', 'Brasília', 'João Pessoa', 'Porto Alegre'];

const [cidade1, cidade2, cidade3, , cidade5, ...resto] = cidades;

console.log(cidade1, cidade2, cidade3, cidade5, resto);