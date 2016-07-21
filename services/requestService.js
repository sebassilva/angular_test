angular
	.module('app')
	.factory('requestService', ['myConfig', function(myConfig){
		return {
			request: function(method, data, url, callback){
				if (data.length == 0){
					data = ''
					//method = 'GET'
				}
			$.ajax({
				  method: method,
				  url: url,
				  data: data
				})
				  .done(function(data) {
				  	if (data['code'] == 200){
				  		console.log(data)
				  		callback(data)
				  		//return data
				  	}
				  }).fail(function(err){
				  	console.log(err)
				  	return err
			  });
			}, 
		}
	}])