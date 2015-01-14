'use strict';

angular.module('linkedinFullstackApp')
	.controller('WelcomeCtrl', function($scope, $http, socket, $linkedIn, $state, Auth, ngDialog) {


    $scope.ShowNgDialog = function () {
        ngDialog.open({            
            template: "<center><img src = 'img/comp.png' class='ngdialog-content'></center>",
            plain: true,
            
      })
    }

     $scope.ShowFancyNgDialog = function () {
        ngDialog.open({            
            template: "<center><img src = 'img/fancyPic.png' class='ngdialog-content'></center>",
            plain: true,
            
      })
    }

		
		$http.get('/api/users/me').success(function(ProfileData) {
			$scope.profileInformation = ProfileData;
			
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