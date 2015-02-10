'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fancyPublish', {
        url: '/fancyPublish/:id',
        templateUrl: 'app/fancyPublish/fancyPublish.html',
        controller: 'FancyPublishCtrl'
      });
  });