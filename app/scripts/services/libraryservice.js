'use strict';

/**
 * @ngdoc service
 * @name yeomanAngularTutorialApp.libraryService
 * @description
 * # libraryService
 * Service in the yeomanAngularTutorialApp.
 */
angular.module('yeomanAngularTutorialApp')
  .service('libraryService', function () {
    var books = [
      { title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: "The Great Gatsby is a story told by Nick Carraway, who was once Gatsby's neighbor, " +
        "and he tells the story sometime after 1922, when the incidents that fill the book take place. As the story opens, " +
        "Nick has just moved from the Midwest to West Egg, Long Island, seeking his fortune as a bond salesman.",
        pages: 180,
        publishDate: new Date(1925, 3, 10),
        cover: 'https://i.ytimg.com/vi/ehjTS6AhMJ8/maxresdefault.jpg',
        rating: 5,
        id: 123123
      },
      { title: 'This Side of Paradise',
        author: 'F. Scott Fitzgerald',
        description: "F. Scott Fitzgerald's semi-autobiographical first novel, This Side of Paradise, became an instant best-seller and established an image of seemingly carefree, party-mad young men and women out to create a new morality for a new, post-war America. It traces the early life of Amory Blaine from the end of prep school through Princeton to the start of an uncertain career in New York City.",
        pages: 305,
        publishDate: new Date(1920, 2, 26),
        cover: 'https://literarytransgressions.files.wordpress.com/2011/07/fitzparadise.jpg',
        rating: 3,
        id: 234234
      },
      { title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        description: "Dark allegory describes the narrator’s journey up the Congo River and his meeting with, and fascination by, Mr. Kurtz, a mysterious personage who dominates the unruly inhabitants of the region. Masterly blend of adventure, character development, psychological penetration.",
        pages: 72,
        publishDate: new Date(1899, 1, 23),
        cover: 'https://msu.edu/~jungahre/transmedia/uploads/5/3/9/9/5399521/4427591.jpg?315',
        rating: 2,
        id: 345345
      },
      { title: 'The Turn of the Screw',
        author: 'Henry James',
        description: "A very young woman's first job: governess for two weirdly beautiful, strangely distant, oddly silent children, Miles and Flora, at a forlorn estate...An estate haunted by a beckoning evil.",
        pages: 96,
        publishDate: new Date(1898, 9, 13),
        cover: 'http://i.gr-assets.com/images/S/photo.goodreads.com/books/1405982423i/752717._UY200_.jpg',
        rating: 4,
        id: 456456
      },
      { title: 'The Stranger',
        author: 'Albert Camus',
        description: "Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed 'the nakedness of man faced with the absurd.'",
        pages: 123,
        publishDate: new Date(1942, 2, 13),
        cover: 'http://bookcritics.org/images/uploads/the-stranger.jpg',
        rating: 5,
        id: 567567
      },
      { title: 'Frankenstein',
        author: 'Mary Shelley',
        description: "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's.",
        pages: 166,
        publishDate: new Date(1818, 3, 10),
        cover: 'http://ciervoblanco.club/wp-content/uploads/2014/11/frankenstein-mary-shelley.jpg',
        rating: 5,
        id: 678678
      },
      { title: 'The Metamorphosis',
        author: 'Franz Kafka',
        description: "'The Metamorphosis' (original German title: 'Die Verwandlung') is a short novel by Franz Kafka, first published in 1915. It is often cited as one of the seminal works of fiction of the 20th century and is widely studied in colleges and universities across the western world. The story begins with a traveling salesman, Gregor Samsa, waking to find himself transformed into an insect.",
        pages: 55,
        publishDate: new Date(1915, 3, 16),
        cover: 'https://qph.ec.quoracdn.net/main-qimg-42df9bdf33d996560684acee63af2845?convert_to_webp=true',
        rating: 4,
        id: 789789
      },
      { title: 'Silas Marner',
        author: 'George Eliot',
        description: "Embittered by a false accusation, disappointed in friendship and love, the weaver Silas Marner retreats into a long twilight life alone with his loom. . . and his gold. Silas hoards a treasure that kills his spirit until fate steals it from him and replaces it with a golden-haired founding child. Where she came from, who her parents were, and who really stole the gold are the secrets that permeate this moving tale of guilt and innocence.",
        pages: 160,
        publishDate: new Date(1861, 7, 29),
        cover: 'http://www.ac-grenoble.fr/cite.scolaire.internationale/Peda/Discipli/CDI/Travaux/grimoires/IMG/jpg_Silas_Marner.jpg',
        rating: 1,
        id: 890890
      },
      { title: 'The Sorrows of Young Werther',
        author: 'Johann Wolfgang von Goethe',
        description: "Its tale of a sensitive young man's self-destructive passion for a lover who ultimately rejects him was based in part on the author's own experiences, and the story's tragic resolution inspired a wave of suicides among young romantics throughout Europe. Goethe's portrayal of Zerrissenheit, 'the state of being torn apart,' in which a character struggles to reconcile his artistic sensibilities with the demands of the objective world, proved tremendously influential to subsequent writers.",
        pages: 96,
        publishDate: new Date(1774, 8, 29),
        cover: 'http://66.media.tumblr.com/c66d37bbe23b487f99ac69ba329eca04/tumblr_inline_nbtmst4vLq1sgjss3.jpg',
        rating: 3,
        id: 901901
      },
      { title: 'Passing',
        author: 'Nella Larsen',
        description: "Clare Kendry leads a dangerous life. Fair, elegant, and ambitious, she is married to a white man unaware of her African American heritage, and has severed all ties to her past. Clare’s childhood friend, Irene Redfield, just as light-skinned, has chosen to remain within the African American community, but refuses to acknowledge the racism that continues to constrict her family’s happiness. A chance encounter forces both women to confront the lies they have told others—and the secret fears they have buried within themselves.",
        pages: 102,
        publishDate: new Date(1929, 3, 21),
        cover: 'http://i1.wp.com/www.audiobooktreasury.com/wp-content/uploads/2015/05/Passing-by-Nella-Larsen-Audiobook.jpg?resize=300%2C449',
        rating: 5,
        id: 134435
      },
      { title: 'The Awakening',
        author: 'Kate Chopin',
        description: "The Awakening, originally titled A Solitary Soul, is a novel by Kate Chopin, first published in 1899. Set in New Orleans and the Southern Louisiana coast at the end of the nineteenth century, the plot centers on Edna Pontellier and her struggle to reconcile her increasingly unorthodox views on femininity and motherhood with the prevailing social attitudes of the turn-of-the-century American South.",
        pages: 128,
        publishDate: new Date(1899, 11, 1),
        cover: 'http://ahhsapenglish.wikispaces.com/file/view/awakening2.jpg/295630602/awakening2.jpg',
        rating: 2,
        id: 632674
      }

    ];

    var author = {};

    this.getBooks = function () {
      return books;
    };

    this.createBook = function(newBook) {
      books.push(newBook);
    };

    this.findBook = function(bookId) {
      return _.find(books, function(o) { return o.id == bookId; });
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
