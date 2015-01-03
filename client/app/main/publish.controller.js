'use strict';
angular.module('linkedinFullstackApp')
  .controller('PublishCtrl', function($scope, $http, socket, $linkedIn, $state, Auth) {

$http.get('/api/users/me').success(function(ProfileData) {
	$scope.published = ProfileData;
	console.log($scope.published)
       console.log('get')
    });
  });
