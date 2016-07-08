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
    $scope.hello = "hello";

    $scope.books = [
      {title: 'The Great Gatsby',
       author: 'F. Scott Fitzgerald',
       pages: 180,
       publishDate: new Date(1925, 3, 10)
      },
      {title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        pages: 72,
        publishDate: new Date(1899, 1, 23)
      },
      {title: 'The Turn of the Screw',
        author: 'Henry James',
        pages: 96,
        publishDate: new Date(1898, 9, 13)
      },
      {title: 'The Stranger',
        author: 'Albert Camus',
        pages: 123,
        publishDate: new Date(1942, 2, 13)
      },
      {title: 'Frankenstein',
        author: 'Mary Shelley',
        pages: 166,
        publishDate: new Date(1818, 3, 10)
      },
      {title: 'The Metamorphosis',
        author: 'Franz Kafka',
        pages: 55,
        publishDate: new Date(1915, 3, 16)
      },
      {title: 'Silas Marner',
        author: 'George Eliot',
        pages: 160,
        publishDate: new Date(1861, 7, 29)
      },
      {title: 'The Sorrows of Young Werther',
        author: 'Johann Wolfgang von Goethe',
        pages: 96,
        publishDate: new Date(1774, 8, 29)
      },
      {title: 'Passing',
        author: 'Nella Larsen',
        pages: 102,
        publishDate: new Date(1929, 3, 21)
      },
      {title: 'The Awakening',
        author: 'Kate Chopin',
        pages: 128,
        publishDate: new Date(1899, 11, 1)
      }

    ];

    $scope.authorsList = [];


    // for each (book in $scope.books) {
    //   for each (author in book.authors) {
    //     $scope.authorsList.push(author);
    //   }
    // }

    // function getAuthors(){
    //     _($scope.books).forEach($scope.books, function(value) {
    //       _(value).forEach(value.authors, function(value) {
    //         $scope.authorsList.push(value);
    //       });
    //     });
    // }
    // getAuthors();

    //$scope.authorsList = _.orderBy(authorsList, )

    $scope.isCreating = false;
    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.createBook = createBook;
    $scope.resetCreateForm = resetCreateForm;

    function startCreating() {
      $scope.isCreating = true;
    }

    function cancelCreating() {
      $scope.isCreating = false;
    }

    function resetCreateForm() {
      $scope.newBook = {
        title: '',
        author: '',
        pages: null,
        publishDate: null
      }
    }

    function createBook(newBook) {
      newBook.id = $scope.books.length;
      $scope.books.push(newBook);
      resetCreateForm();
    }

  });
