const pessoa = new Object({
    nome: 'Fernando',
    sobrenome: 'Santos',
    nascimento: 2000,
    cidade: 'Nova Iguaçu',
    casado: false
});

const alunos = new Object();
alunos.nome = 'Fernando',
alunos.sobrenome = 'Santos';
alunos.nota = new Array(7.5, 8, 9, 5.9);

for(let obj in pessoa) {
    console.log(`${obj} - ` + pessoa[obj])
}

console.log('----------------------------------------');

for(let aluno in alunos) {
    console.log(`${aluno} - ${alunos[aluno]}`);
}

console.log('----------------------------------------');

for (let al in alunos) {
    console.log(`${typeof(alunos[al])}`);
}