'use strict';

angular.module('linkedinFullstackApp')
  .controller('FormalPublishCtrl', function ($scope, $http, socket, $linkedIn, $state, Auth, $stateParams) {
      $http.get('/api/users/pub/' + $stateParams.id).success(function(ProfileData) {
          $scope.profileInformation = ProfileData
       });
  });
