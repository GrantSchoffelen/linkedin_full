angular.module('linkedinFullstackApp')
  .controller('MainCtrl', function ($scope, $http, socket, $linkedIn, $state) {
  	$http.post('api/user')
  })