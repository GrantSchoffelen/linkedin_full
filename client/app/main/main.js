'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true, 
        template: '<div ui-view></div>',
        controller: 'MainCtrl'
      })
      .state('main.profile',{
        url: '/',
        templateUrl: 'app/main/profile.html',
        controller: 'ProfileCtrl'
      })
      // .state('main.create',{
      // 	url: '/create',
      // 	templateUrl: 'app/main/create.html'
      // })
  });