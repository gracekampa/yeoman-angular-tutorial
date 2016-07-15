'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the yeomanAngularTutorialApp
 */
angular.module('yeomanAngularTutorialApp')
  .controller('LibraryCtrl', function ($scope) {

    $scope.books = [
      { title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        publishDate: new Date(1925, 3, 10),
        cover: 'https://i.ytimg.com/vi/ehjTS6AhMJ8/maxresdefault.jpg',
        rating: 5
      },
      { title: 'This Side of Paradise',
        author: 'F. Scott Fitzgerald',
        pages: 305,
        publishDate: new Date(1920, 2, 26),
        cover: 'https://literarytransgressions.files.wordpress.com/2011/07/fitzparadise.jpg',
        rating: 3
      },
      { title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        pages: 72,
        publishDate: new Date(1899, 1, 23),
        cover: 'https://msu.edu/~jungahre/transmedia/uploads/5/3/9/9/5399521/4427591.jpg?315',
        rating: 2
      },
      { title: 'The Turn of the Screw',
        author: 'Henry James',
        pages: 96,
        publishDate: new Date(1898, 9, 13),
        cover: 'http://i.gr-assets.com/images/S/photo.goodreads.com/books/1405982423i/752717._UY200_.jpg',
        rating: 4
      },
      { title: 'The Stranger',
        author: 'Albert Camus',
        pages: 123,
        publishDate: new Date(1942, 2, 13),
        cover: 'http://bookcritics.org/images/uploads/the-stranger.jpg',
        rating: 5
      },
      { title: 'Frankenstein',
        author: 'Mary Shelley',
        pages: 166,
        publishDate: new Date(1818, 3, 10),
        cover: 'http://ciervoblanco.club/wp-content/uploads/2014/11/frankenstein-mary-shelley.jpg',
        rating: 5
      },
      { title: 'The Metamorphosis',
        author: 'Franz Kafka',
        pages: 55,
        publishDate: new Date(1915, 3, 16),
        cover: 'https://qph.ec.quoracdn.net/main-qimg-42df9bdf33d996560684acee63af2845?convert_to_webp=true',
        rating: 4
      },
      { title: 'Silas Marner',
        author: 'George Eliot',
        pages: 160,
        publishDate: new Date(1861, 7, 29),
        cover: 'http://www.ac-grenoble.fr/cite.scolaire.internationale/Peda/Discipli/CDI/Travaux/grimoires/IMG/jpg_Silas_Marner.jpg',
        rating: 1
      },
      { title: 'The Sorrows of Young Werther',
        author: 'Johann Wolfgang von Goethe',
        pages: 96,
        publishDate: new Date(1774, 8, 29),
        cover: 'http://66.media.tumblr.com/c66d37bbe23b487f99ac69ba329eca04/tumblr_inline_nbtmst4vLq1sgjss3.jpg',
        rating: 3
      },
      { title: 'Passing',
        author: 'Nella Larsen',
        pages: 102,
        publishDate: new Date(1929, 3, 21),
        cover: 'http://i1.wp.com/www.audiobooktreasury.com/wp-content/uploads/2015/05/Passing-by-Nella-Larsen-Audiobook.jpg?resize=300%2C449',
        rating: 5
      },
      { title: 'The Awakening',
        author: 'Kate Chopin',
        pages: 128,
        publishDate: new Date(1899, 11, 1),
        cover: 'http://ahhsapenglish.wikispaces.com/file/view/awakening2.jpg/295630602/awakening2.jpg',
        rating: 2
      }

    ];

    $scope.newBook = {};
    $scope.newBook.title = "Title";
    $scope.newBook.author = "Author";
    $scope.newBook.pages = 15;
    $scope.newBook.publishDate = new Date(1912, 2, 3);
    $scope.newBook.cover = "http://boxshot.com/boxshot/tutorials/howto/3d-book/3d-ebook-1.png";

    $scope.book = {};

    $scope.isSorted = false;
    $scope.idealSortedBookList = $scope.sortedBooksList;
    $scope.today = Date.now();
    $scope.rating = 3;
    $scope.isReadonly = true;
    $scope.rateBook = function(rating) {
      $scope.rating = rating;
    };

    $scope.authorsList = [];
    $scope.createBook = createBook;
    $scope.resetCreateForm = resetCreateForm;
    $scope.deleteBook = deleteBook;
    $scope.setAuthorsList = setAuthorsList;
    $scope.setBooksList = setBooksList;
    $scope.moveOrder = moveOrder;
    $scope.sortBooks = sortBooks;
    $scope.selectBook = selectBook;
    $scope.editBook = editBook;

    function init() {
      $scope.isSorted = true;
      setAuthorsList();
      setBooksList();
      setBookListOrder();
    }
    init();

    function setBooksList() {
      $scope.idealSortedBookList = _.sortBy($scope.books, 'publishDate');
      if ($scope.isSorted) {
        $scope.sortedBooksList = _.sortBy($scope.books, 'publishDate');
        console.log("sorting inside setbookslist");
      }
      else {
        $scope.sortedBooksList = $scope.books;
      }
    }

    function setAuthorsList() {
      $scope.authorsList =_.sortBy($scope.books, 'author');
      $scope.authorsList =_.groupBy($scope.authorsList, 'author');

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
      setAuthorsList(value);
      setBooksList(value);
      // setBookListOrder(value);
      console.log('test watch');
    }, true);

    $scope.$watch('sortedBooksList', function(value) {
      // setAuthorsList(value);
      setBooksList(value);

      $scope.sortedBooksList = _.sortBy($scope.books, 'order');
      if (_.isEqual($scope.sortedBooksList, $scope.idealSortedBookList)) {
        $scope.isSorted = true;
      }
      // setBookListOrder(value);
      console.log($scope.isSorted);
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

    function createBook(newBook) {
      newBook.rating = $scope.rating;
      newBook.order = $scope.books.length;
      $scope.books.push(newBook);
      $('#createBook').modal('hide');
      resetCreateForm();

      if ($scope.isSorted) {
        sortBooks();
      }
      else {
        $scope.isSorted = false;
      }
    }

    function deleteBook(book) {
      var deletedBookOrder = book.order;
      if (deletedBookOrder != $scope.books.length) {
        for (var i = deletedBookOrder; i <= $scope.books.length-2; i++) {
          // order = 4 gets deleted
          $scope.sortedBooksList[i+1].order = i;
          console.log(i);
          console.log($scope.sortedBooksList[i+1].order);
        }
      }

      _.remove($scope.books, function(b) {
        return b.title === book.title;
      });
    }

    function moveOrder(book, moveUp) {
      // var bookIndex = _($scope.sortedBooksList).findIndex(book);
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
      $scope.book = {
        title: book.title,
        author: book.author,
        pages: book.pages,
        publishDate: book.publishDate,
        cover: book.cover,
        rating: book.rating,
        order: book.order
      }
      $scope.rating = $scope.book.rating;

      console.log(book.rating);
    }

    function editBook(book) {
      book.rating = $scope.rating;
      var originalBook = _.find($scope.sortedBooksList, { 'order': book.order });
      console.log(originalBook.title);
      // _.update(originalBook, '', function(updatedBook) { updatedBook = book; return updatedBook; });

      _.remove($scope.books, function(b) {
        return b.order === book.order;
      });
      $scope.books.push(book);

      if ($scope.isSorted) {
        sortBooks();
      }
      else {
        $scope.isSorted = false;
      }

      $('#editBook').modal('hide');
      resetEditForm();
    }

    // bugs I've found:
    // - disable sorting button when list is equal to ideally sorted list using lodash ._isEqual
    // - stylinggggggggg
    // - turn edit button cursor on with hover effects

  });
