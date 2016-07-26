angular
	.module('app')
	.factory('notificationCenter', ['myConfig', 'requestService', function(myConfig, requestService){
		return {
			notificate: function(title, text, type){
				swal({
				   title: title,
				   text: text,
				   type: type,
				   showCancelButton: false,
				   confirmButtonColor: "#DD6B55",confirmButtonText: "Okay!",
				   closeOnConfirm: true
				});
			}, 
			addProduct: function(){
				swal({
				  title: 'Ingresa el nombre del producto que deseas agregar',
				  input: 'text',
				  showCancelButton: true,
				  confirmButtonText: 'Agregar',
				  showLoaderOnConfirm: true,
				  allowOutsideClick: false, 
				  preConfirm: function(newProduct) {
				    return new Promise(function(resolve, reject) {
				      		let url = myConfig.getProductUrl +'?token=' +  myConfig.token
							let request = requestService.request('POST', {name: newProduct}, url, function(data){
								//When request finished succesfully
								resolve();
								console.log(data)
								//reject('Hubo un problema al procesar tu solicitud :(');
							})  
				    }).then(function(newProduct) {
					  swal({
					    type: 'success',
					    title: 'Producto agregado satisfactoriamente!',
					    html: newProduct
					  });
					})
				  }	
				})
			}
		}
	}])