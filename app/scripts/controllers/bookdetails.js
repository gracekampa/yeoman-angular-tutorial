'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:BookdetailsCtrl
 * @description
 * # BookdetailsCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('BookdetailsCtrl', function ($scope, $routeParams, libraryService, $location) {
    $scope.book = {};
    $scope.bookId = $routeParams.bookId;

    $scope.book = libraryService.findBook($scope.bookId);
    // console.log($scope.book);
    if (typeof $scope.book.author == "number") {
      $scope.book.author = libraryService.findAuthor($scope.book.author);
    }
    if (typeof $scope.book.author == "object") {
      $scope.book.author = libraryService.findAuthor($scope.book.author.id);
    }

    $scope.selectBook = selectBook;
    $scope.deleteBook = deleteBook;

    function deleteBook(book) {
      var deletedBookOrder = book.order;
      // if (deletedBookOrder != $scope.books.length) {
      //   for (var i = deletedBookOrder; i <= $scope.books.length-2; i++) {
      //     $scope.sortedBooksList[i+1].order = i;
      //   }
      // }

      libraryService.deleteBook(book);
      $location.url("/books");

    }

    function selectBook(book) {
      $location.url("/book/edit/" + book.id);
      $scope.editBook = angular.copy(book);
      $scope.rating = $scope.book.rating;
      // console.log($scope.editBook);
    }

  });
