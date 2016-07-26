angular.module('app', ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', 'ngstorage', function($urlRouterProvider, $stateProvider, ngstorage){
		$urlRouterProvider.otherwise('/')

		$stateProvider.state('login', {
			url: '/',
			templateUrl: 'controllers/login/login.template.html',
			controller: 'login'
		})
		.state('list', {
			url: '/list',
			templateUrl: 'controllers/list/list.template.html',
			controller: 'listController'
		})
	}])
