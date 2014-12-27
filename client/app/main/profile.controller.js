angular.module('linkedinFullstackApp')
  .controller('ProfileCtrl', function($scope, $http, socket, $linkedIn, $state, Auth) {
    $scope.currentUser = Auth.getCurrentUser();
   


    $http.get('/api/users/me').success(function(ProfileData) {
        $scope.profileInformation = ProfileData; 
        $scope.profileInformation.fullName = ProfileData.linkedin.firstName +" " +ProfileData.linkedin.lastName
        $scope.profileInformation.date = []
        for(var i = 0; i<ProfileData.linkedin.positions.values.length; i++){
          if(ProfileData.linkedin.positions.values[i].endDate === undefined){
            ProfileData.linkedin.positions.values[i].endDate = new Date(); 
          }
          console.log(ProfileData.linkedin.positions.values[i].endDate)
          ProfileData.linkedin.positions.values[i].endDate = new Date(ProfileData.linkedin.positions.values[i].endDate.year, ProfileData.linkedin.positions.values[i].endDate.month)
          if(!$scope.profileInformation.linkedin.skills.values[i].skill.level){
          $scope.profileInformation.linkedin.skills.values[i].skill.level = 5;
          } 
          ProfileData.linkedin.positions.values[i].startDate = new Date(ProfileData.linkedin.positions.values[i].startDate.year, ProfileData.linkedin.positions.values[i].startDate.month)
          $scope.profileInformation.date.push(ProfileData.linkedin.positions.values[i].startDate.getMonth())
         }
    });

    console.log($scope.profileInformation)

    // Helper function for $http.post update databse with information
    $scope.update = function() {
      $http.post('api/users/update', $scope.profileInformation).success(function(data) {
        console.log("Update to database Complete")
      });
    }


    $scope.addPosition = function() {
      $scope.newPosition = {
        company: {name: "Edit Company Name"},
        summary: "Edit Position summary", 
          title: "Edit Position title"
        }
     
      $scope.profileInformation.linkedin.positions.values.push($scope.newPosition)
      $scope.update()
    };

    $scope.addSkill = function() {
      $scope.newSkill = {
        id: '47',
        skill: {
          name: "edit name",
          level: 1 

        }
      };
      $scope.profileInformation.linkedin.skills.values.push($scope.newSkill)
      
    };

$scope.date = function(){
    console.log(new Date(2012, 11))
  }



$scope.remove = function(item) { 
  console.log(item)
  console.log($scope.profileInformation.linkedin.positions.values)
  var index = $scope.profileInformation.linkedin.positions.values.indexOf(item)
  console.log(index)
  $scope.profileInformation.linkedin.positions.values.splice(index, 1);     
}

$scope.deleteFilteredItem = function(hashKey, sourceArray){
  angular.forEach(sourceArray, function(obj, index){
    // sourceArray is a reference to the original array passed to ng-repeat, 
    // rather than the filtered version. 
    // 1. compare the target object's hashKey to the current member of the iterable:
    if (obj.$$hashKey === hashKey) {
      // remove the matching item from the array
      sourceArray.splice(index, 1);
      $scope.update()
      // and exit the loop right away
      return;
    };
  });
}

 $scope.getNumber = function(num) {
        return new Array(num);   
    }


    // $http.post('/api/profiles', $scope.currentUser)
    //       .success(function(data){
    //         console.log('post delete question')
    //       })
    //  $http.get('/profile').success(function(data){
    //     // $scope.profileInformation = data

    // })
  })