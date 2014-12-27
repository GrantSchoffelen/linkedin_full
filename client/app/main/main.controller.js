'use strict';

angular.module('linkedinFullstackApp')
  .controller('MainCtrl', function ($scope, $http, socket, $linkedIn, $state, $window) {
    // $scope.awesomeThings = [];
    // $scope.profileInformation = []; 

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });

    // $scope.loginOauth = function(provider) {
    //   $window.location.href = '/auth/' + provider;
    // };

    // $scope.connect = function() {
    //   $linkedIn.authorize().then(function(){
    //     IN.API.Profile("me")
    //             .fields(["firstName", "lastName", "educations", "headline", "skills", "location:(name)", "positions", "picture-url", "email-address", "twitter-accounts", "public-profile-url"])
    //             .result(function(result) {
    //             JSON.stringify(result)
    //             console.log(JSON.stringify(result))
    //             $scope.profileInformation = result
    //             $http.post('api/user', $scope.profileInformation)
    //                  .success(function(data){
    //                     console.log('post new profile')
    //                   })
    //             $scope.$apply();
    //             // $state.go('main.profile',{id:result._id})
    //            })
    //   });
    //    console.log('logged in')
    //  }

     // $scope.profile = function(){
       
        
     // }


    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
  });



