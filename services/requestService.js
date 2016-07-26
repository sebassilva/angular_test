angular
	.module('app')
	.factory('requestService', ['myConfig', function(myConfig){
		return {
			request: function(method, data, url, callback){
			$.ajax({
				  method: method,
				  url: url,
				  data: data
				})
				  .done(function(data) {
				  		callback(data)
				  		return data
				  }).fail(function(err){
				  	callback(err)
				  	return err
			  });
			}
		}
	}])