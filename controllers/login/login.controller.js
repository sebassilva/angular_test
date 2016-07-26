angular
	.module('app')
	.controller('login', ['$scope', '$location', 'requestService', 'myConfig', 'notificationCenter',
		function($scope, $location, requestService, myConfig, notificationCenter){
		$scope.login = function(user, pass){
			console.log("Did entered tu login function")
			if (user.length != 0 && pass.length != 0){
				requestService.request('POST',  {email:user, password: pass}, myConfig.loginUrl ,saveToken)

			}else{
				notificationCenter.notificate('Error al iniciar sesión', login['Ingrese todos los campos'], 'wawrning')
			}		
		}
		function saveToken(data){
			if (data.readyState === 4){
				console.log(data)
				notificationCenter.notificate('Error al iniciar sesión', data.responseText.message, 'warning')
			}else{
				console.log(myConfig.token )
				myConfig.token = data['user']['token']
				$location.path( "/list" )
				$scope.$apply()
			}
		
		}
	}])