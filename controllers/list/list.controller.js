angular
.module('app')
.controller('listController', ['$scope', '$location', 'requestService', 'myConfig', 'notificationCenter', 
	function($scope, $location, requestService, myConfig, notificationCenter){



	$scope.loadProducts = function (){
		$scope.products = []
		requestService.request('GET', '', myConfig.getAllUrl + myConfig.token, finished)
	}



	$scope.deleteProduct = function(id){
		let url = myConfig.getProductUrl +'/'+ id + '/?token=' + myConfig.token
		let request = requestService.request('DELETE', '', url, deleteProduct)
		for (a = 0; a < $scope.products.length; a++){
		  product = $scope.products[a]
		  if (product.id == id){
		    $scope.products.splice(a,1)
		    notificationCenter.notificate('Producto eliminado', 'El producto se ha eliminado satisfactoriamente', 'success')
		  }
		}
	}

	$scope.addProduct = function(){
		notificationCenter.addProduct()
		$scope.loadProducts()
	}


	function addProduct(data){
		requestService.request('GET', '', myConfig.getAllUrl + myConfig.token, finished)
	}

	function deleteProduct(data){

	}

	function finished(data){
		$scope.products = data.products
		$scope.$apply()
	}

	$scope.loadProducts()

}])

