'use strict'

const inputAdulto = document.getElementById('adultos');
const inputCriancas = document.getElementById('criancas');
const inputDuracao = document.getElementById('duracao');
const resultado = document.getElementById('resultado');
// const btnCalcular = document.querySelector('#btn-calcular');

window.addEventListener('click', function (event) {
	const element = event.target;

	if(element.classList.contains('btn-calc')) {
		console.log('Calculando...');

		const adultos = inputAdulto.value;
		const criancas = inputCriancas.value;
		const duracao = inputDuracao.value;
	
		const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
		const qdtTotalCerveja = cervejaPP(duracao) * adultos;
		const qdtTotalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
	
		resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de carne</p>`;
		resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} ml de cerveja</p>`;
		resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 200)} pets de 2 litros de bebidas</p>`;
	}

});


/* Função para determinar o tempo */
const carnePP = duracao => duracao >= 6 ? 650 : 400;

const cervejaPP = duracao => duracao >= 6 ? 1200 : 200;

const bebidasPP = duracao => duracao >= 6 ? 1500 : 100;

// btnCalcular.addEventListener('click', function() {
// 	console.log('Calculando...');

// 	const adultos = inputAdulto.value;
// 	const criancas = inputCriancas.value;
// 	const duracao = inputDuracao.value;

// 	const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
// 	const qdtTotalCerveja = cervejaPP(duracao) * adultos;
// 	const qdtTotalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

// 	resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de carne</p>`;
// 	resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} ml de cervej</p>`;
// 	resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 200)} pets de 2 litros de bebidas</p>`;
// });

// const carnePP = function(duracao) {
// 	if(duracao >= 6) {
// 		return 650;
// 	} else {
// 		return 400;
// 	}
// };

// const cervejaPP = function(duracao) {
// 	if(duracao >= 6) {
// 		return 1200;
// 	} else {
// 		return 200;
// 	}
// };

// const bebidasPP = function(duracao) {
// 	if(duracao >= 6) {
// 		return 1500;
// 	} else {
// 		return 100;
// 	}
// };