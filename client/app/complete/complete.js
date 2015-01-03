
angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('complete', {
        url: '/complete/:id',
        templateUrl: 'app/complete/complete.html',
        controller: 'CompleteCtrl'
      });
  });