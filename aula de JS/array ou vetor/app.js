const nomes = new Array();

nomes.push('Eduardo');
nomes.push('Carlos');
nomes.push('Fernando');
nomes.unshift('Ana');

nomes.map((vlr, index) => {
    console.log(`A posição ${index} é -`,vlr);
})