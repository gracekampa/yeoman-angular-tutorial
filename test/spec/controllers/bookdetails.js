'use strict';

describe('Controller: BookdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAngularTutorialApp'));

  var BookdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookdetailsCtrl = $controller('BookdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
