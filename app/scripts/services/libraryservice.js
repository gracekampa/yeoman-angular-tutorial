'use strict';

/**
 * @ngdoc service
 * @name yeomanAngularTutorialApp.libraryService
 * @description
 * # libraryService
 * Service in the yeomanAngularTutorialApp.
 */
angular.module('yeomanAngularTutorialApp')
  .service('libraryService', function ($http, $q) {
    var books = [
      { title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        publishDate: new Date(1925, 3, 10),
        cover: 'https://i.ytimg.com/vi/ehjTS6AhMJ8/maxresdefault.jpg',
        rating: 5,
        id: 123123
      },
      { title: 'This Side of Paradise',
        author: 'F. Scott Fitzgerald',
        pages: 305,
        publishDate: new Date(1920, 2, 26),
        cover: 'https://literarytransgressions.files.wordpress.com/2011/07/fitzparadise.jpg',
        rating: 3,
        id: 234234
      },
      { title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        pages: 72,
        publishDate: new Date(1899, 1, 23),
        cover: 'https://msu.edu/~jungahre/transmedia/uploads/5/3/9/9/5399521/4427591.jpg?315',
        rating: 2,
        id: 345345
      },
      { title: 'The Turn of the Screw',
        author: 'Henry James',
        pages: 96,
        publishDate: new Date(1898, 9, 13),
        cover: 'http://i.gr-assets.com/images/S/photo.goodreads.com/books/1405982423i/752717._UY200_.jpg',
        rating: 4,
        id: 456456
      },
      { title: 'The Stranger',
        author: 'Albert Camus',
        pages: 123,
        publishDate: new Date(1942, 2, 13),
        cover: 'http://bookcritics.org/images/uploads/the-stranger.jpg',
        rating: 5,
        id: 567567
      },
      { title: 'Frankenstein',
        author: 'Mary Shelley',
        pages: 166,
        publishDate: new Date(1818, 3, 10),
        cover: 'http://ciervoblanco.club/wp-content/uploads/2014/11/frankenstein-mary-shelley.jpg',
        rating: 5,
        id: 678678
      },
      { title: 'The Metamorphosis',
        author: 'Franz Kafka',
        pages: 55,
        publishDate: new Date(1915, 3, 16),
        cover: 'https://qph.ec.quoracdn.net/main-qimg-42df9bdf33d996560684acee63af2845?convert_to_webp=true',
        rating: 4,
        id: 789789
      },
      { title: 'Silas Marner',
        author: 'George Eliot',
        pages: 160,
        publishDate: new Date(1861, 7, 29),
        cover: 'http://www.ac-grenoble.fr/cite.scolaire.internationale/Peda/Discipli/CDI/Travaux/grimoires/IMG/jpg_Silas_Marner.jpg',
        rating: 1,
        id: 890890
      },
      { title: 'The Sorrows of Young Werther',
        author: 'Johann Wolfgang von Goethe',
        pages: 96,
        publishDate: new Date(1774, 8, 29),
        cover: 'http://66.media.tumblr.com/c66d37bbe23b487f99ac69ba329eca04/tumblr_inline_nbtmst4vLq1sgjss3.jpg',
        rating: 3,
        id: 901901
      },
      { title: 'Passing',
        author: 'Nella Larsen',
        pages: 102,
        publishDate: new Date(1929, 3, 21),
        cover: 'http://i1.wp.com/www.audiobooktreasury.com/wp-content/uploads/2015/05/Passing-by-Nella-Larsen-Audiobook.jpg?resize=300%2C449',
        rating: 5,
        id: 134435
      },
      { title: 'The Awakening',
        author: 'Kate Chopin',
        pages: 128,
        publishDate: new Date(1899, 11, 1),
        cover: 'http://ahhsapenglish.wikispaces.com/file/view/awakening2.jpg/295630602/awakening2.jpg',
        rating: 2,
        id: 632674
      }

    ];

    this.getBooks = function () {
      return books;
    };

    this.createBook = function(newBook) {
      books.push(newBook);
    };

    this.findBook = function(book) {
      return _.find(books, { 'id': book.id })
    };

    this.deleteBook = function(book) {
      _.remove(books, function(b) {
        return b.id === book.id;
      });
    };

    this.editBook = function(book) {
      var originalBookIndex = _.findIndex(books, { 'id': book.id });

      books[originalBookIndex] = book;
      
    };

  });
