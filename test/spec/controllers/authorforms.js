'use strict';

describe('Controller: AuthorformsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAngularTutorialApp'));

  var AuthorformsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthorformsCtrl = $controller('AuthorformsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthorformsCtrl.awesomeThings.length).toBe(3);
  });
});
