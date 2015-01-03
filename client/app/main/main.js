'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true, 
        template: '<div ui-view></div>',
        controller: 'MainCtrl'
      })
       .state('main.welcome',{
        url: '/',
        templateUrl: 'app/main/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .state('main.profile',{
        url: '/profile',
        templateUrl: 'app/main/profile.html',
        controller: 'ProfileCtrl'
      })
        .state('publish',{
        url: '/publish/:id',
        templateUrl: 'app/main/publish.html',
        controller: 'PublishCtrl'
      })
        .state('main.formalProfile',{
        url: '/formalProfile',
        templateUrl: 'app/main/formalProfile.html',
        controller: 'FormalProfileCtrl'
      })
      // .state('main.create',{
      // 	url: '/create',
      // 	templateUrl: 'app/main/create.html'
      // })
  });