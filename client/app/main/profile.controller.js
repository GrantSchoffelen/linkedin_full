angular.module('linkedinFullstackApp')
  .controller('ProfileCtrl', function($scope, $http, socket, $linkedIn, $state, Auth) {

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

         console.log($scope.profileInformation)
         
    });


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

    $scope.addContact = function() {
      $scope.newContact = {
        feild: "Edit Contact Feild",
        information: "Edit Contact Information", 
        }
     
      $scope.profileInformation.linkedin.contacts.push($scope.newContact)
      $scope.update()
    };

    $scope.addSkill = function() {
      $scope.newSkill = {
        id: $scope.profileInformation.linkedin.skills.values.length +1, 
        skill: {
          name: "edit name",
          level: 5 

        }
      };
      $scope.profileInformation.linkedin.skills.values.push($scope.newSkill)
      
    };

    $scope.addEducation = function() {
      $scope.newEducation = {
        degree: "Degree", 
          fieldOfStudy: "Major",
          notes: "Description", 
          schoolName: "School Name", 
          startDate: {year: "Start Date"}, 
          endDate: {year: "End Date"}  

        
      };
      $scope.profileInformation.linkedin.educations.values.push($scope.newEducation)
      
    };



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