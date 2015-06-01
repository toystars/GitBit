/*
  api-call service that makes the api call using the 
  andgular in-built $http service for AJAX calls
*/

app.factory('apiCall',['$http', function($http) {

  var apiAuth = '?client_id=c30a3fb3fbf8a39ce45e&client_secret=9605a09673cf6ec928ebbd96ae432f709f551238';
  return {
    fetchUser: function(username) {
      return  $http.get('https://api.github.com/users/' + username + apiAuth);
    },
    fetchFollowers: function(username) {
      return  $http.get('https://api.github.com/users/' + username + '/followers' + apiAuth);
    },
    fetchFollowing: function(username) {
      return  $http.get('https://api.github.com/users/' + username + '/following' + apiAuth);
    },
    fetchRepo: function(username) {
      return  $http.get('https://api.github.com/users/' + username + '/repos' + apiAuth);
    }
  };
}]);
