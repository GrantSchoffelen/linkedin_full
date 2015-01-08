'use strict';

angular.module('linkedinFullstackApp')
	.controller('WelcomeCtrl', function($scope, $http, socket, $linkedIn, $state, Auth) {
		$http.get('/api/users/me').success(function(ProfileData) {
			$scope.profileInformation = ProfileData;
			$scope.profileInformation.fullName = ProfileData.linkedin.firstName + " " + ProfileData.linkedin.lastName
		console.log($scope.profileInformation)
		})

		$scope.update = function() {
			$http.post('api/users/update', $scope.profileInformation).success(function(data) {
				console.log("Update to database Complete")
			});
		}


		$scope.chooseTemplate = function() {
			$scope.profileInformation.linkedin.template = {
				template: 'monkey'
			}
           $scope.update()
		
		}
	});