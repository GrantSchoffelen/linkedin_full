
'use strict';

angular.module('linkedinFullstackApp')
  .controller('FormalCtrl', function ($scope, $http, socket, $linkedIn, $state, Auth) {
    

$http.get('/api/users/me').success(function(ProfileData) {
     $scope.profileInformation = ProfileData; 
     $scope.profileInformation.fullName = ProfileData.linkedin.firstName +" " +ProfileData.linkedin.lastName
     $scope.profileInformation.linkedin.contacts =[]; 
      if($scope.profileInformation.linkedin.contacts.length === 0){
          $scope.profileInformation.linkedin.contacts.push({feild: 'Email', information: ProfileData.linkedin.emailAddress}); 
          $scope.profileInformation.linkedin.contacts.push({feild: 'Phone', information: '123-456-7890'}); 
          $scope.profileInformation.linkedin.contacts.push({feild: 'Link', 
          information: ProfileData.linkedin.publicProfileUrl}); 
        }
        for(var j=0; j< $scope.profileInformation.linkedin.skills.values.length; j++){
          if(!$scope.profileInformation.linkedin.skills.values[j].skill.level){
            $scope.profileInformation.linkedin.skills.values[j].skill.level = 5;
          }
        }

       for(var i = 0; i < ProfileData.linkedin.positions.values.length; i++){
       console.log(ProfileData.linkedin.positions.values[i])
        if(!ProfileData.linkedin.positions.values[i].endDate){
        ProfileData.linkedin.positions.values[i].endDate = { month: new Date().getMonth(), 
                                                             year: new Date().getFullYear(), 
                                                             total: null}
        }
         if(!ProfileData.linkedin.positions.values[i].startDate){
        ProfileData.linkedin.positions.values[i].startDate = { month: 0, 
                                                               year: 2015, 
                                                               total: null}
        }
    
    if(!ProfileData.linkedin.positions.values[i].startDate.total){
          ProfileData.linkedin.positions.values[i].startDate.total = new Date(ProfileData.linkedin.positions.values[i].startDate.year, ProfileData.linkedin.positions.values[i].startDate.month)
          ProfileData.linkedin.positions.values[i].startDate.total = ProfileData.linkedin.positions.values[i].startDate.total.toDateString().substring(4,7) + " " +ProfileData.linkedin.positions.values[i].startDate.total.toDateString().substring(11,15); 
        }
        
          if(!ProfileData.linkedin.positions.values[i].endDate.total){
          ProfileData.linkedin.positions.values[i].endDate.total = new Date(ProfileData.linkedin.positions.values[i].endDate.year, ProfileData.linkedin.positions.values[i].endDate.month)
          ProfileData.linkedin.positions.values[i].endDate.total = ProfileData.linkedin.positions.values[i].endDate.total.toDateString().substring(4,7) + " " +ProfileData.linkedin.positions.values[i].endDate.total.toDateString().substring(11,15);     
         }
         }
         
    });

 $scope.getNumber = function(num) {
        return new Array(num);   
    }

  

    
  });
