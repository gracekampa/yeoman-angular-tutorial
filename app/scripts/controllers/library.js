'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('LibraryCtrl', function ($scope, libraryService) {

    $scope.books = libraryService.getBooks();
    $scope.authorsList = libraryService.getAuthors();


    $scope.newBook = {};
    $scope.newBook.title = "Title";
    $scope.newBook.author = "Author";
    $scope.newBook.pages = 15;
    $scope.newBook.publishDate = new Date(1912, 2, 3);
    $scope.newBook.cover = "http://boxshot.com/boxshot/tutorials/howto/3d-book/3d-ebook-1.png";

    $scope.book = {};

    $scope.isSorted = false;
    $scope.idealSortedBookList = _.sortBy($scope.books, 'publishDate');
    $scope.today = Date.now();
    $scope.rating = 3;
    $scope.isReadonly = true;
    $scope.rateBook = function(rating) {
      $scope.rating = rating;
    };

    $scope.createBook = createBook;
    $scope.resetCreateForm = resetCreateForm;
    $scope.deleteBook = deleteBook;
    $scope.setAuthorsList = setAuthorsList;
    $scope.setBooksList = setBooksList;
    $scope.moveOrder = moveOrder;
    $scope.sortBooks = sortBooks;
    $scope.selectBook = selectBook;
    $scope.editBook = editBook;
    // $scope.setAuthorsBookList = setAuthorsBookList;

    function init() {
      $scope.isSorted = true;
      setAuthorsList();
      setBooksList();
      setBookListOrder();
      // setAuthorsBookList();
    }
    init();

    function setBooksList() {
      if ($scope.isSorted) {
        $scope.sortedBooksList = _.sortBy($scope.books, 'publishDate');
      }
      else {
        $scope.sortedBooksList = $scope.books;
      }
    }

    function setAuthorsList() {
      for (var i = 0; i < $scope.books.length; i++) {
        var book = $scope.books[i];
        console.log(typeof book.author);
        if (typeof book.author == "number") {
          book.author = libraryService.findAuthor(book.author);
        }
        if (typeof book.author == "object") {
          book.author = libraryService.findAuthor(book.author.id);
        }
        console.log(book);
      }
    }

    function setBookListOrder() {
      for (var i = 0; i < $scope.sortedBooksList.length; i++) {
        $scope.sortedBooksList[i].order = i;
      }
    }

    function sortBooks() {
      $scope.sortedBooksList = _.sortBy($scope.books, 'publishDate');
      setBookListOrder();
      $scope.isSorted = true;
      setBooksList();
      $scope.idealSortedBookList = $scope.sortedBooksList;
    }

    $scope.$watch('books', function(value) {
      // setAuthorsList(value);
      setBooksList(value);
      // setAuthorsBookList(value);
    }, true);

    $scope.$watch('sortedBooksList', function(value) {
      // setAuthorsList(value);
      setBooksList(value);
      // setAuthorsBookList(value);

      $scope.sortedBooksList = _.sortBy($scope.books, 'order');
      if (_.isEqual($scope.sortedBooksList, $scope.idealSortedBookList)) {
        $scope.isSorted = true;
      }
    }, true);

    function resetCreateForm() {
      $scope.newBook = {
        title: '',
        author: '',
        pages: null,
        publishDate: null,
        cover: ''
      }
    }

    function resetEditForm() {
      $scope.book = {
        title: '',
        author: '',
        pages: null,
        publishDate: null,
        cover: ''
      }
    }

    // function createBook(newBook) {
    //   newBook.rating = $scope.rating;
    //   newBook.order = $scope.books.length;
    //   newBook.id = new Date().getUTCMilliseconds();
    //
    //   libraryService.createBook(newBook);
    //
    //   $('#createBook').modal('hide');
    //   resetCreateForm();
    //
    //   if ($scope.isSorted) {
    //     sortBooks();
    //   }
    //   else {
    //     $scope.isSorted = false;
    //   }
    // }

    function deleteBook(book) {
      var deletedBookOrder = book.order;
      if (deletedBookOrder != $scope.books.length) {
        for (var i = deletedBookOrder; i <= $scope.books.length-2; i++) {
          $scope.sortedBooksList[i+1].order = i;
        }
      }

      libraryService.deleteBook(book);

    }

    function moveOrder(book, moveUp) {
      var bookIndex = book.order;
      var swapIndex = moveUp ? bookIndex - 1 : bookIndex + 1;

      var originalBook = _.find($scope.sortedBooksList, ['order', bookIndex]);
      var swapBook = _.find($scope.sortedBooksList, ['order', swapIndex]);

      if (swapBook) {
        originalBook.order = swapIndex;
        swapBook.order = bookIndex;
        $scope.isSorted = false;
      }

    }

    function selectBook(book) {
      $scope.book = angular.copy(book);
      $scope.rating = $scope.book.rating;
    }

    // function setAuthorsBookList() {
    //   for (var i = 0; i < $scope.books.length - 1; i++) {
    //     var author = $scope.books[i].author;
    //     var authorId = $scope.books[i].author.id;
    //     author.AuthorBooks = libraryService.getAuthorBooks(authorId);
    //   }
    // }

    // function editBook(book) {
    //   book.rating = $scope.rating;
    //
    //   libraryService.editBook(book);
    //
    //   if ($scope.isSorted) {
    //     sortBooks();
    //   }
    //   else {
    //     $scope.isSorted = false;
    //   }
    //
    //   $('#editBook').modal('hide');
    //   resetEditForm();
    // }

  });
