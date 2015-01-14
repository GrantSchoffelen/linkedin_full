'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('jobs', {
        url: '/jobs',
        templateUrl: 'app/jobs/jobs.html',
        controller: 'JobsCtrl'
      });
  });