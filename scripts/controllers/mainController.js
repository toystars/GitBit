app.controller('mainController', ['$scope', '$mdSidenav', 'apiCall', function($scope, $mdSidenav, apiCall){
  
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  // app models
  $scope.searchQuery = '';  // model for search query

  // function that assigns data to meodels from the api call
  function manipulateApiResponse(data) {
    $scope.data = data; // assign the object returned to a scope variable
    
    // assign to models
    $scope.userFullName = $scope.data['name'];
    $scope.userImageUrl = $scope.data['avatar_url'];
    $scope.repoUrl = 'https://github.com/' + $scope.searchQuery + '?tab=repositories';
    $scope.userProfileLink = 'https://github.com/' + $scope.searchQuery;
    $scope.numberOfPublicRepos = $scope.data['public_repos'];
    $scope.userLogin = $scope.data['login'];
    $scope.userEmail = $scope.data['email'];
    $scope.userLocation = $scope.data['location'];
    $scope.userAvailableForHire = $scope.data['hireable'];
    $scope.userCompany = $scope.data['company'];
  };

  // function that assigns data to followers models
  function manipulateFollowersArray(data) {
    $scope.followersArray = data;
    $scope.followersNumber = $scope.followersArray.length;
  }

  // function that assigns data to following models
  function manipulateFollowingArray(data) {
    $scope.followingArray = data;
    $scope.followingNumber = $scope.followingArray.length;
  }

  // function that assigns data to repo models
  function manipulateRepoArray(data) {
    $scope.repoArray = data;
  }

  // function that consumes the apiCall service to fetch the data from github
  $scope.getUserObject = function(username) {
    apiCall.fetchUser(username).success(manipulateApiResponse);
    apiCall.fetchFollowers(username).success(manipulateFollowersArray);
    apiCall.fetchFollowing(username).success(manipulateFollowingArray);
    apiCall.fetchRepo(username).success(manipulateRepoArray);
  };
}]);



/*
// app models
  $scope.searchQuery = '';
  $scope.userFullName = '';
  $scope.userImageUrl = '';
  $scope.repoUrl = '';
  $scope.userProfileLink = '';
  $scope.followersApiUrl = '';
  $scope.followingApiUrl = '';
  $scope.numberOfPublicRepos = 0;
  $scope.userLogin = '';
  $scope.userEmail = '';
  $scope.userLocation = '';
  $scope.userAvailableForHire = false;
  $scope.userCompany = '';
*/