'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:BookformsCtrl
 * @description
 * # BookformsCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('BookformsCtrl', function ($scope, $routeParams, libraryService, $location) {
    $scope.isEditForm = false;

    $scope.book = {};
    $scope.bookId = $routeParams.bookId;
    $scope.book = libraryService.findBook($scope.bookId);

    $scope.books = libraryService.getBooks();

    $scope.rating = 3;
    $scope.isReadonly = true;
    $scope.rateBook = function(rating) {
      $scope.rating = rating;
    };

    $scope.editBook = editBook;
    $scope.createBook = createBook;

    function init() {
      if ($routeParams.bookId) {
        $scope.isEditForm = true;
        $scope.rating = $scope.book.rating;
      }
    }
    init();

    function editBook(book) {
      console.log("inside edit");
      book.rating = $scope.rating;
      console.log(book.rating);

      libraryService.editBook(book);

      if ($scope.isSorted) {
        sortBooks();
      }
      else {
        $scope.isSorted = false;
      }

      $location.url("/bookDetails/" + book.id);

      // $('#editBook').modal('hide');
      // resetEditForm();
    }

    function createBook(newBook) {
      console.log("inside create");
      console.log(newBook);
      newBook.rating = $scope.rating;
      newBook.order = $scope.books.length;
      newBook.id = new Date().getUTCMilliseconds();

      libraryService.createBook(newBook);

      // $('#createBook').modal('hide');
      // resetCreateForm();

      if ($scope.isSorted) {
        sortBooks();
      }
      else {
        $scope.isSorted = false;
      }

      $location.url("/bookDetails/" + newBook.id);
    }

  });
