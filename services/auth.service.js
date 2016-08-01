angular
  .module('app')
  .factory('auth', ['myConfig', '$sessionStorage',  function(myConfig, $sessionStorage){
    return{
      updateLocalStorage: function(){
        if ($sessionStorage.token === undefined){
          $sessionStorage.token = myConfig.token
          console.log("local storage was undefined but now is updated")
        }else {
          myConfig.token = $sessionStorage.token
          console.log("User have already logged in and token is saved")
        }
      },
      checkIfAuth: function(){
        myConfig.token = $sessionStorage.token
        if ($sessionStorage.token === undefined){
          $location.path('/login')
        }
      }
    }
  }])
