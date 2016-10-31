'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularTutorialApp
 */

(function() {
  angular
    .module("yeomanAngularTutorialApp")
    .controller("MainCtrl", MainCtrl);

  function MainCtrl($location, $scope, libraryService) {
    var vm = this;
    $scope.books = libraryService.getBooks();

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function init() {
      vm.$location = $location;
      console.log($scope.books);
      console.log($scope.books.length);
    }
    init();
  }
})();
