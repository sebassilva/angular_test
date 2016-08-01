angular
.module('app')
.controller('listController', ['$scope', '$location', 'requestService', 'myConfig', 'notificationCenter', 'auth', '$sessionStorage',
	function($scope, $location, requestService, myConfig, notificationCenter, auth, $sessionStorage){



	$scope.loadProducts = function (){
		$scope.products = []
		requestService.request('GET', '', myConfig.getAllUrl + $sessionStorage.token, finished)
	}



	$scope.deleteProduct = function(id){
		let url = myConfig.getProductUrl +'/'+ id + '/?token=' + $sessionStorage.token
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
		requestService.request('GET', '', myConfig.getAllUrl + $sessionStorage.token, finished)
	}

	function deleteProduct(data){

	}

	function finished(data){
		$scope.products = data.products
		$scope.$apply()
	}
		auth.checkIfAuth()
		$scope.loadProducts()

}])
