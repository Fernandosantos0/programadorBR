const alunos = new Object();

const prop1 = 'nome';
const prop2 = 'sobrenome';
const prop3 = 'idade';
const prop4 = 'notas';

alunos[prop1] = 'Fernando';
alunos[prop2] = 'Santos';
alunos[prop3] = 22;
// alunos[prop4] = [8, 8.9, 5, 10];

console.log(typeof(alunos) ,alunos);

for(let chave in alunos) {
    console.log(chave);
}