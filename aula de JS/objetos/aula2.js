const criaObjeto = (nom, sob, id, cid) => {
    return {
        nome: nom,
        sobrenome: sob,
        idade: id,
        cidade: cid
    };
};

let pessoa = null;

for(let i = 0; i <= 4; i++) {
    pessoas = [
        criaObjeto('Fernando', 'Santos', 22, 'Nova Iguaçu'),
        criaObjeto('Carlos', 'Felix', 5, 'Rio de Janeiro'),
        criaObjeto('Henrique', 'Souza', 8, 'Manaus'),
        criaObjeto('Marlos', 'Marchado', 10, 'Cuabá'),
        criaObjeto('Francisco', 'Fonseca', 29, 'Curitiba'),
    ];
}


for(let indice in pessoas) {
    console.log(pessoas[indice])
}