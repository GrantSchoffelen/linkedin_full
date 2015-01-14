'use strict';

describe('Controller: FancyPublishCtrl', function () {

  // load the controller's module
  beforeEach(module('linkedinFullstackApp'));

  var FancyPublishCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FancyPublishCtrl = $controller('FancyPublishCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
