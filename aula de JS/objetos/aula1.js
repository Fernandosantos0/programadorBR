

const aluno = {
    nome: 'Fernando',
    sobrenome: 'Santos',
    nota: [8.5, 8, 5.8, 10],

    media: function () {
        return (this.nota[0] + this.nota[1] + this.nota[2] + this.nota[3]) / 4
    }
    
}

console.log(aluno.nome + " " + aluno.sobrenome);
console.log(aluno.media);