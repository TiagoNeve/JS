// variáveis let -> faz a variável ficar apenas no escopo
// do programa.
// variável var -> faz a variável ser do tipo global

// PRIMEIRO CÓDIGO

var precos = [1200.7, 345.7, 2543.98 ];

var total = precos;

var incluirMedia = true;

if(incluirMedia) {
	var total = total/precos.length;
	
	// Continuo a lógica
}
