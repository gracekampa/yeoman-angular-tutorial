'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:AuthorCtrl
 * @description
 * # AuthorCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('AuthorCtrl', function ($scope, libraryService) {
    $scope.books = libraryService.getBooks();
    $scope.authorsList = libraryService.getAuthors();


  });
