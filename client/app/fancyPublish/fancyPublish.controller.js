'use strict';

angular.module('linkedinFullstackApp')
  .controller('FancyPublishCtrl', function ($scope, $http, socket, $linkedIn, $state, Auth, $stateParams) {
      $http.get('/api/users/pub/' + $stateParams.id).success(function(ProfileData) {
          $scope.profileInformation = ProfileData
       });
  });
