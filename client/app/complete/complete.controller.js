'use strict';

angular.module('linkedinFullstackApp')
  .controller('CompleteCtrl', function ($scope, $http, socket, $linkedIn, $state, Auth) {
    $http.get('/api/users/me').success(function(ProfileData) {
	$scope.profileInformation = ProfileData;
	$scope.profileInformation.fullName = ProfileData.linkedin.firstName +" " +ProfileData.linkedin.lastName
    });

     $scope.getNumber = function(num) {
        return new Array(num);   
    }
  });

