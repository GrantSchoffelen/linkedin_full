'use strict';

describe('Controller: FormalPublishCtrl', function () {

  // load the controller's module
  beforeEach(module('linkedinFullstackApp'));

  var FormalPublishCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormalPublishCtrl = $controller('FormalPublishCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
