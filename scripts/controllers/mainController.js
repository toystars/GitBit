app.controller('mainController', ['$scope', '$mdSidenav', 'apiCall', function($scope, $mdSidenav, apiCall){
  
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  // function that consumes the apiCall service to fetch the data from github
  $scope.fectUser = function(username) {
    apiCall.fetchUser(username).success(function(data) {
      $scope.data = data;
    });
  };

}]);