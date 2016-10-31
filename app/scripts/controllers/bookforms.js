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
    $scope.authorsList = libraryService.getAuthors();

    $scope.rating = 3;
    $scope.isReadonly = true;
    $scope.rateBook = function(rating) {
      $scope.rating = rating;
    };

    $scope.editBook = editBook;
    $scope.createBook = createBook;
    $scope.cancelForm = cancelForm;

    function init() {
      if ($routeParams.bookId) {
        $scope.isEditForm = true;
        $scope.rating = $scope.book.rating;
        $scope.book = angular.copy($scope.book);
      }
    }
    init();

    function editBook(book) {
      console.log("inside edit");
      book.rating = $scope.rating;
      console.log(book.author);

      libraryService.editBook(book);
      $location.url("/book/" + book.id);

      if ($scope.isSorted) {
        sortBooks();
      }
      else {
        $scope.isSorted = false;
      }

      // $('#editBook').modal('hide');
      // resetEditForm();
    }

    function createBook(newBook) {
      newBook.rating = $scope.rating;
      newBook.order = $scope.books.length;
      newBook.id = new Date().getUTCMilliseconds();
      console.log(newBook);

      libraryService.createBook(newBook);

      $location.url("/book/" + newBook.id);
      // $location.url("/book/123456");
      console.log(newBook.id);

      // $('#createBook').modal('hide');
      // resetCreateForm();

      if ($scope.isSorted) {
        sortBooks();
      }
      else {
        $scope.isSorted = false;
      }

    }

    function cancelForm() {
      if (!($scope.isEditForm)) {
        $location.url("/books");
      }
      if ($scope.isEditForm) {
        $location.url("/book/" + $scope.book.id);
      }
    }

  });
