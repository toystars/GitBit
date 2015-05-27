/*
  api-call service that makes the api call using the 
  andgular in-built $http service for AJAX calls
*/

app.service('apiCall', ['$http', function($http) {

  // function that performs the api call using the $http service
  function fetchUser(serachArg) {
    $http.get('https://api.github.com/search/users?q=' + serachArg)
      .success(function(response) {
        var httpResponse = response;
        return httpResponse;
      });
  }

  // return the service object
   return {
    fetchUser: fetchUser;
  };

}]);