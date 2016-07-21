angular
	.module('app')
	.value('myConfig', {
		'loginUrl': 'https://mxlab.s.gigigoapps.com/examen/login', 
		'getAllUrl': 'https://mxlab.s.gigigoapps.com/examen/products?token=',
		'getProductUrl': 'https://mxlab.s.gigigoapps.com/examen/product/',
		'token': ''
	})