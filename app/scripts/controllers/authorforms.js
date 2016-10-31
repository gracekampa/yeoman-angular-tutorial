'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:AuthorformsCtrl
 * @description
 * # AuthorformsCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('AuthorformsCtrl', function ($scope, $routeParams, libraryService, $location) {
    $scope.isEditForm = false;

    $scope.author = {};
    $scope.authorId = $routeParams.authorId;
    $scope.author = libraryService.findAuthor($scope.authorId);

    $scope.books = libraryService.getBooks();
    $scope.authorsList = libraryService.getAuthors();

    $scope.editAuthor = editAuthor;
    $scope.createAuthor = createAuthor;
    $scope.cancelForm = cancelForm;

    function init() {
      if ($routeParams.authorId) {
        $scope.isEditForm = true;
        $scope.author = angular.copy($scope.author);
      }
    }
    init();

    function editAuthor(author) {
      console.log("inside edit");

      libraryService.editAuthor(author);
      $location.url("/author/" + author.id);

    }

    function createAuthor(newAuthor) {
      newAuthor.id = new Date().getUTCMilliseconds();
      console.log(newAuthor);

      libraryService.createAuthor(newAuthor);

      $location.url("/author/" + newAuthor.id);
      // $location.url("/author/123456");
      console.log(newAuthor.id);

    }

    function cancelForm() {
      if (!($scope.isEditForm)) {
        $location.url("/authors");
      }
      if ($scope.isEditForm) {
        $location.url("/author/" + $scope.author.id);
      }
    }
  });
