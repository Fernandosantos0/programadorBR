// Nome do aluno - nota1 - nota2 - média - aprovado / reprovado

const nomesAlunos = new Array ('Fernando','Carlos', 'José');

// for(var i = 0; i < nomesAlunos.length; i++) {
//     media[i] = (nota1[i] + nota2[i]) / 2;
// }

// for(let cont; cont < nomesAlunos.length; cont++) {
//     console.log(`${nomesAlunos[cont] - media[cont]}`);
// }

for(let indice in nomesAlunos) {
    console.log(nomesAlunos[indice]);
}

console.log('------------- Separado -------------');

for(let indice of nomesAlunos) {
    console.log(indice);
}