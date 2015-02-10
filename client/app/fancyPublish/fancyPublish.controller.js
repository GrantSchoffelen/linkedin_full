'use strict';

angular.module('linkedinFullstackApp')
  .controller('FancyPublishCtrl', function ($scope, $http, socket, $linkedIn, $state, Auth, $stateParams) {
      $http.get('/api/users/' + $stateParams.id).success(function(ProfileData) {
          $scope.profileInformation = ProfileData
       });
  });
