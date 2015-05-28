/*
  api-call service that makes the api call using the 
  andgular in-built $http service for AJAX calls
*/

app.factory('apiCall',['$http', function($http) {

  var apiAuth = '?client_id=c20d4cc3d83f7d505737&client_secret=39777a8b06af0c4ee6090d8ec7c6e4a6a326c0e1';
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