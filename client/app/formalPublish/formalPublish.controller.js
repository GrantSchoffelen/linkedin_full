'use strict';

angular.module('linkedinFullstackApp')
  .controller('FormalPublishCtrl', function ($scope) {
     $http.get('/api/users/' + $stateParams.id).success(function(ProfileData) {
          $scope.profileInformation = ProfileData
       });
  });
