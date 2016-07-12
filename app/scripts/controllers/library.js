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
        cover: 'https://i.ytimg.com/vi/ehjTS6AhMJ8/maxresdefault.jpg'
      },
      { title: 'This Side of Paradise',
        author: 'F. Scott Fitzgerald',
        pages: 305,
        publishDate: new Date(1920, 2, 26),
        cover: 'https://literarytransgressions.files.wordpress.com/2011/07/fitzparadise.jpg'
      },
      { title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        pages: 72,
        publishDate: new Date(1899, 1, 23),
        cover: 'https://msu.edu/~jungahre/transmedia/uploads/5/3/9/9/5399521/4427591.jpg?315'
      },
      { title: 'The Turn of the Screw',
        author: 'Henry James',
        pages: 96,
        publishDate: new Date(1898, 9, 13),
        cover: 'http://i.gr-assets.com/images/S/photo.goodreads.com/books/1405982423i/752717._UY200_.jpg'
      },
      { title: 'The Stranger',
        author: 'Albert Camus',
        pages: 123,
        publishDate: new Date(1942, 2, 13),
        cover: 'http://bookcritics.org/images/uploads/the-stranger.jpg'
      },
      { title: 'Frankenstein',
        author: 'Mary Shelley',
        pages: 166,
        publishDate: new Date(1818, 3, 10),
        cover: 'http://ciervoblanco.club/wp-content/uploads/2014/11/frankenstein-mary-shelley.jpg'
      },
      { title: 'The Metamorphosis',
        author: 'Franz Kafka',
        pages: 55,
        publishDate: new Date(1915, 3, 16),
        cover: 'https://qph.ec.quoracdn.net/main-qimg-42df9bdf33d996560684acee63af2845?convert_to_webp=true'
      },
      { title: 'Silas Marner',
        author: 'George Eliot',
        pages: 160,
        publishDate: new Date(1861, 7, 29),
        cover: 'http://www.ac-grenoble.fr/cite.scolaire.internationale/Peda/Discipli/CDI/Travaux/grimoires/IMG/jpg_Silas_Marner.jpg'
      },
      { title: 'The Sorrows of Young Werther',
        author: 'Johann Wolfgang von Goethe',
        pages: 96,
        publishDate: new Date(1774, 8, 29),
        cover: 'http://66.media.tumblr.com/c66d37bbe23b487f99ac69ba329eca04/tumblr_inline_nbtmst4vLq1sgjss3.jpg'
      },
      { title: 'Passing',
        author: 'Nella Larsen',
        pages: 102,
        publishDate: new Date(1929, 3, 21),
        cover: 'http://i1.wp.com/www.audiobooktreasury.com/wp-content/uploads/2015/05/Passing-by-Nella-Larsen-Audiobook.jpg?resize=300%2C449'
      },
      { title: 'The Awakening',
        author: 'Kate Chopin',
        pages: 128,
        publishDate: new Date(1899, 11, 1),
        cover: 'http://ahhsapenglish.wikispaces.com/file/view/awakening2.jpg/295630602/awakening2.jpg'
      }

    ];

    $scope.authorsList = [];
    $scope.createBook = createBook;
    $scope.resetCreateForm = resetCreateForm;
    $scope.deleteBook = deleteBook;
    $scope.setAuthorsList = setAuthorsList;

    function init() {
      setAuthorsList();
    }
    init();

    function setAuthorsList() {
      $scope.authorsList =_.sortBy($scope.books, 'author');
      $scope.authorsList =_.groupBy($scope.authorsList, 'author');

    }

    $scope.$watch('books', function(value) {
      setAuthorsList(value);
      console.log('test watch');
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

    function createBook(newBook) {
      $scope.books.push(newBook);
      $('#createBook').modal('hide');
      resetCreateForm();
    }

    function deleteBook(book) {
      _.remove($scope.books, function(b) {
        return b.title === book.title;
      })
    }

  });
