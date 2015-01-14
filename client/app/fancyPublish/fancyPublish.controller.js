'use strict';

angular.module('linkedinFullstackApp')
  .controller('FancyPublishCtrl', function ($scope, $http, socket, $linkedIn, $state, Auth) {
      $http.get('/api/users/me').success(function(ProfileData) {
          $scope.profileInformation = ProfileData
       });
  });
