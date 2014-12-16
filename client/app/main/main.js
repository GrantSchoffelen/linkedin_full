'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.profile',{
      	url: '/profile/:id',
      	templateUrl: 'app/main/profile.html'
      })
  });