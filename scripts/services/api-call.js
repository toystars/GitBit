/*
  api-call service that makes the api call using the 
  andgular in-built $http service for AJAX calls
*/

app.factory('apiCall',['$http', function($http) {
  return {
    fetchUser: function(username) {
      return  $http.get('https://api.github.com/search/users?q=' + username);
    }
  };
}]);