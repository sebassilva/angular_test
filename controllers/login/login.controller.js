angular
	.module('app')
	.controller('login', ['$scope', '$location', 'requestService', 'myConfig', 
		function($scope, $location, requestService, myConfig){
		$scope.login = function(user, pass){
			console.log("Did entered tu login function")
			if (user.length != 0 && pass.length != 0){
				requestService.request('POST',  { email:user, password: pass}, myConfig.loginUrl ,saveToken)

			}else{
				$scope.error = "Ingrese todos los campos."
			}		
		}
		function saveToken(login){
			console.log('Token saved correctly')
			myConfig.token = login['user']['token']
			$location.path( "/list" )
			$scope.$apply()
			console.log(myConfig.token )
		}
	}])