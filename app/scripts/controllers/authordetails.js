'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:AuthorCtrl
 * @description
 * # AuthorCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('AuthorDetailsCtrl', function ($scope, $routeParams, libraryService, $location) {
    $scope.author = {};
    $scope.authorId = $routeParams.authorId;

    $scope.bookAuthor = libraryService.findAuthor($scope.authorId);
    // $scope.bookAuthor = $scope.book.author;
    console.log($scope.bookAuthor);

    $scope.selectAuthor = selectAuthor;
    $scope.deleteAuthor = deleteAuthor;
    $scope.setAuthorBookList = setAuthorBookList;

    function init() {
      setAuthorBookList();
    }
    init();

    function deleteAuthor(author) {
      var deletedBookOrder = book.order;

      libraryService.deleteAuthor(author);
      $location.url("/authors");

    }

    function selectAuthor(author) {
      $location.url("/author/edit/" + author.id);
      $scope.editAuthor = angular.copy(author);
      console.log($scope.editAuthor);
    }

    function setAuthorBookList() {
      var author = $scope.bookAuthor;
      var authorId = author.authorId;
      author.books = libraryService.getAuthorBooks(author);
    }
  });
