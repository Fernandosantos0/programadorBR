const pessoa = {
    nome: 'Fernando',
    snome: 'Santos'
};

const ch1 = 'cidade';
const ch2 = 'estado';

pessoa[ch1] = 'Nova Iguaçu';
pessoa[ch2] = 'RJ';
pessoa['sexo'] = 'Masculino';
pessoa.idade = 22;
pessoa['nota'] = [5, 6, 8.8, 10];

for(let vlr in pessoa) {
    console.log(vlr + ` - ${pessoa[vlr]}`);
}

console.log(pessoa['nota'][3]);
console.log(pessoa.nota[1]);