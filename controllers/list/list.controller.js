angular
.module('app')
.controller('listController', ['$scope', '$location', 'requestService', 'myConfig', function($scope, $location, requestService, myConfig){
	console.log('Now we are on list controller')
	$scope.products = []
	requestService.request('GET', '', myConfig.getAllUrl + myConfig.token, finished)


	$scope.deleteProduct = function(id){
		var url = myConfig.getProductUrl + id + '?token=' + myConfig.token
		var request = requestService.request('DELETE', '', url, deleteProduct)
		console.log('LLEGO A ESTA FUNCION PRRO' + request)
		for (a = 0; a < $scope.products.length; a++){
		  product = $scope.products[a]
		  if (product.id == id){
		    $scope.products.splice(a,1)
		    console.log("SE ELIMMINO A LA VERGA" + a)
		  }
		}
	}





	function deleteProduct(data){
		

	}

	function finished(data){
		console.log(data)
		$scope.products = data.products
		$scope.$apply()
		console.log("Producst: " + $scope.products)
	}
}])

