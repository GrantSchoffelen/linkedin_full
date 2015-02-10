'use strict';

angular.module('linkedinFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('formalPublish', {
        url: '/formalPublish/:id',
        templateUrl: 'app/formalPublish/formalPublish.html',
        controller: 'CompleteCtrl'
      });
  });