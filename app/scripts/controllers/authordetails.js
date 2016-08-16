'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:AuthorCtrl
 * @description
 * # AuthorCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('AuthorCtrl', function ($scope, $routeParams, libraryService, $location) {
    $scope.author = {};
    $scope.authorId = $routeParams.bookId;

    $scope.bookAuthor = libraryService.findAuthor($scope.authorId);
    // $scope.bookAuthor = $scope.book.author;
    console.log($scope.author);
  });
