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
    var authors = [
      {
        name: 'F. Scott Fitzgerald',
        nationality: 'American',
        bio: "Francis Scott Key Fitzgerald, known professionally as F. Scott Fitzgerald, was an American novelist and short story writer, whose works are the paradigmatic writings of the Jazz Age. He is widely regarded as one of the greatest American writers of the 20th century. Fitzgerald is considered a member of the 'Lost Generation' of the 1920s.",
        dob: new Date(1896, 9, 24),
        dod: new Date(1940, 12, 21),
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/F_Scott_Fitzgerald_1921.jpg",
        id: 123456,
        books: [123123, 234234]
      },
      {
        name: 'Joseph Conrad',
        nationality: 'Polish-British',
        bio: "Joseph Conrad, born Józef Teodor Konrad Korzeniowski, was regarded as one of the greatest novelists to write in the English language. " +
        "He wrote stories and novels, many with a nautical setting, that depict trials of the human spirit in the midst of an impassive, inscrutable universe.",
        dob: new Date(1857, 12, 3),
        dod: new Date(1924, 8, 3),
        photo: "http://i.telegraph.co.uk/multimedia/archive/01689/joseph-conrad_1689362i.jpg",
        id: 345678,
        books: [345345]

      },
      {
        name: 'Henry James',
        nationality: 'American',
        bio: "Henry James  is regarded as one of the key " +
        "figures of 19th-century literary realism. He was the son of Henry James, Sr. and the brother of philosopher and psychologist William James a" +
        "nd diarist Alice James. He is best known for a number of novels showing Americans encountering Europe and Europeans.",
        dob: new Date(1843, 4, 15),
        dod: new Date(1916, 2, 28),
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Henry_James_by_Sargent_1913.jpg",
        id: 456789,
        books: [456456]

      },
      {
        name: 'Albert Camus',
        nationality: 'French',
        bio: "Albert Camus was a French philosopher, author, and journalist. His views contributed to the rise of the philosophy known as absurdism. " +
        "He wrote in his essay The Rebel that his whole life was devoted to opposing the philosophy of nihilism while still delving deeply into individual " +
        "freedom. He won the Nobel Prize in Literature in 1957.",
        dob: new Date(1913, 11, 7),
        dod: new Date(1960, 1, 4),
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Albert_Camus,_gagnant_de_prix_Nobel,_portrait_en_buste,_pos%C3%A9_au_bureau,_faisant_face_%C3%A0_gauche,_cigarette_de_tabagisme.jpg",
        id: 567891,
        books: [567567]
      },
      {
        name: 'Mary Shelley',
        nationality: 'American',
        bio: "Mary Shelley was born as Mary Wollstonecraft Godwin in Somers Town, London, in 1797. She was the second " +
        "child of the feminist philosopher, educator, and writer Mary Wollstonecraft, and the first child of the philosopher, " +
        "novelist, and journalist William Godwin.",
        dob: new Date(1797, 8, 30),
        dod: new Date(1851, 2, 1),
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/RothwellMaryShelley.jpg/440px-RothwellMaryShelley.jpg",
        id: 678912,
        books: [678678]
      },
      {
        name: 'Franz Kafka',
        nationality: 'American',
        bio: "Franz Kafka was a writer of novels and short stories who is " +
        "widely regarded as one of the major figures of 20th-century literature. His work, which fuses elements of realism and the " +
        "fantastic, typically features isolated protagonists faced by bizarre or surrealistic predicaments and incomprehensible social-bureaucratic powers, " +
        "and has been interpreted as exploring themes of alienation, existential anxiety, guilt, and absurdity.",
        dob: new Date(1883, 7, 3),
        dod: new Date(1924, 6, 3),
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Kafka_portrait.jpg",
        id: 789123,
        books: [789789]
      },
      {
        name: 'George Eliot',
        nationality: 'English',
        bio: "Mary Ann Evans (alternatively Mary Anne or Marian), known by her " +
        "pen name George Eliot, was an English novelist, poet, journalist, translator and one of the leading writers of the Victorian era." +
        "She used a male pen name, she said, to ensure her works would be taken seriously.",
        dob: new Date(1819, 11, 22),
        dod: new Date(1880, 12, 22),
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/81/George_Eliot_at_30_by_Fran%C3%A7ois_D%27Albert_Durade.jpg",
        id: 891234,
        books: [890890]
      },
      {
        name: 'Johann Wolfgang von Goethe',
        nationality: 'German',
        bio: "Johann Wolfgang (von) Goethe was a German writer and statesman. His body of work includes epic and lyric poetry " +
        "written in a variety of metres and styles; prose and verse dramas; memoirs; an autobiography; literary and aesthetic criticism; " +
        "treatises on botany, anatomy, and colour; and four novels. In addition, numerous literary and scientific fragments, more than 10,000 letters, " +
        "and nearly 3,000 drawings by him exist.",
        dob: new Date(1749, 8, 28),
        dod: new Date(1832, 3, 22),
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Goethe_%28Stieler_1828%29.jpg/440px-Goethe_%28Stieler_1828%29.jpg",
        id: 912345,
        books: [901901]
      },
      {
        name: 'Nella Larsen',
        nationality: 'American',
        bio: "Nellallitea 'Nella' Larsen, born Nellie Walker, was an American novelist of the Harlem Renaissance. Working as a " +
        "nurse and a librarian, she published two novels, Quicksand (1928) and Passing (1929), and a few short stories. Though her " +
        "literary output was scant, she earned recognition by her contemporaries. A revival of interest in her writing has occurred " +
        "since the late 20th century, when issues of racial and sexual identity have been studied.",
        dob: new Date(1891, 4, 13),
        dod: new Date(1964, 3, 30),
        photo: "http://brbl-archive.library.yale.edu/exhibitions/cvvpw/portrait_lg/larson.jpg",
        id: 654321,
        books: [134435]
      },
      {
        name: 'Kate Chopin',
        nationality: 'American',
        bio: "Kate Chopin, born Katherine O'Flaherty, was a U.S. author of short stories and novels. She is now considered by some " +
        "to have been a forerunner of the feminist authors of the 20th century of Southern or Catholic background, such as Zelda Fitzgerald.",
        dob: new Date(1850, 2, 8),
        dod: new Date(1904, 8, 22),
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Kate_Chopin.jpg",
        id: 543219,
        books: [632674]
      }

    ];

    var books = [
      { title: 'The Great Gatsby',
        author: 123456,
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
        author: 123456,
        description: "F. Scott Fitzgerald's semi-autobiographical first novel, This Side of Paradise, became an instant best-seller and established " +
        "an image of seemingly carefree, party-mad young men and women out to create a new morality for a new, post-war America. It traces the early life " +
        "of Amory Blaine from the end of prep school through Princeton to the start of an uncertain career in New York City.",
        pages: 305,
        publishDate: new Date(1920, 2, 26),
        cover: 'https://literarytransgressions.files.wordpress.com/2011/07/fitzparadise.jpg',
        rating: 3,
        id: 234234
      },
      { title: 'Heart of Darkness',
        author: 345678,
        description: "Dark allegory describes the narrator’s journey up the Congo River and his meeting with, and fascination " +
        "by, Mr. Kurtz, a mysterious personage who dominates the unruly inhabitants of the region. Masterly blend of adventure, character " +
        "development, psychological penetration.",
        pages: 72,
        publishDate: new Date(1899, 1, 23),
        cover: 'https://msu.edu/~jungahre/transmedia/uploads/5/3/9/9/5399521/4427591.jpg?315',
        rating: 2,
        id: 345345
      },
      { title: 'The Turn of the Screw',
        author: 456789,
        description: "A very young woman's first job: governess for two weirdly beautiful, strangely distant, oddly silent children, Miles and Flora, at a forlorn estate...An estate haunted by a beckoning evil.",
        pages: 96,
        publishDate: new Date(1898, 9, 13),
        cover: 'http://i.gr-assets.com/images/S/photo.goodreads.com/books/1405982423i/752717._UY200_.jpg',
        rating: 4,
        id: 456456
      },
      { title: 'The Stranger',
        author: 567891,
        description: "Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed 'the nakedness of man faced with the absurd.'",
        pages: 123,
        publishDate: new Date(1942, 2, 13),
        cover: 'http://bookcritics.org/images/uploads/the-stranger.jpg',
        rating: 5,
        id: 567567
      },
      { title: 'Frankenstein',
        author: 678912,
        description: "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's.",
        pages: 166,
        publishDate: new Date(1818, 3, 10),
        cover: 'http://ciervoblanco.club/wp-content/uploads/2014/11/frankenstein-mary-shelley.jpg',
        rating: 5,
        id: 678678
      },
      { title: 'The Metamorphosis',
        author: 789123,
        description: "'The Metamorphosis' (original German title: 'Die Verwandlung') is a short novel by Franz Kafka, first published in 1915. It is often cited as one of the seminal works of fiction of the 20th century and is widely studied in colleges and universities across the western world. The story begins with a traveling salesman, Gregor Samsa, waking to find himself transformed into an insect.",
        pages: 55,
        publishDate: new Date(1915, 3, 16),
        cover: 'https://qph.ec.quoracdn.net/main-qimg-42df9bdf33d996560684acee63af2845?convert_to_webp=true',
        rating: 4,
        id: 789789
      },
      { title: 'Silas Marner',
        author: 891234,
        description: "Embittered by a false accusation, disappointed in friendship and love, the weaver Silas Marner retreats into a long twilight life alone with his loom. . . and his gold. Silas hoards a treasure that kills his spirit until fate steals it from him and replaces it with a golden-haired founding child. Where she came from, who her parents were, and who really stole the gold are the secrets that permeate this moving tale of guilt and innocence.",
        pages: 160,
        publishDate: new Date(1861, 7, 29),
        cover: 'http://www.ac-grenoble.fr/cite.scolaire.internationale/Peda/Discipli/CDI/Travaux/grimoires/IMG/jpg_Silas_Marner.jpg',
        rating: 1,
        id: 890890
      },
      { title: 'The Sorrows of Young Werther',
        author: 912345,
        description: "Its tale of a sensitive young man's self-destructive passion for a lover who ultimately rejects him was based in part on the author's own experiences, and the story's tragic resolution inspired a wave of suicides among young romantics throughout Europe. Goethe's portrayal of Zerrissenheit, 'the state of being torn apart,' in which a character struggles to reconcile his artistic sensibilities with the demands of the objective world, proved tremendously influential to subsequent writers.",
        pages: 96,
        publishDate: new Date(1774, 8, 29),
        cover: 'http://66.media.tumblr.com/c66d37bbe23b487f99ac69ba329eca04/tumblr_inline_nbtmst4vLq1sgjss3.jpg',
        rating: 3,
        id: 901901
      },
      { title: 'Passing',
        author: 654321,
        description: "Clare Kendry leads a dangerous life. Fair, elegant, and ambitious, she is married to a white man unaware of her African American heritage, and has severed all ties to her past. Clare’s childhood friend, Irene Redfield, just as light-skinned, has chosen to remain within the African American community, but refuses to acknowledge the racism that continues to constrict her family’s happiness. A chance encounter forces both women to confront the lies they have told others—and the secret fears they have buried within themselves.",
        pages: 102,
        publishDate: new Date(1929, 3, 21),
        cover: 'http://i1.wp.com/www.audiobooktreasury.com/wp-content/uploads/2015/05/Passing-by-Nella-Larsen-Audiobook.jpg?resize=300%2C449',
        rating: 5,
        id: 134435
      },
      { title: 'The Awakening',
        author: 543219,
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

    this.getAuthors = function () {
      return authors;
    };

    this.createBook = function(newBook) {
      console.log(newBook);
      console.log("books.length=" + books.length);
      console.log(books);
      books.push(newBook);
    };

    this.createAuthor = function(newAuthor) {
      newAuthor.books = [];
      authors.push(newAuthor);
    };

    this.findBook = function(bookId) {
      return _.find(books, function(o) { return o.id == bookId; });
    };

    this.findAuthor = function(authorId) {
      return _.find(authors, function(o) { return o.id == authorId; });
    };

    this.getAuthorBooks = function(author) {
      // var author = this.findAuthor(authorId);
      var authorBookList = [];
      for (var i = 0; i < author.books.length; i++) {
        authorBookList.push(this.findBook(author.books[i]));
      }
      return authorBookList;
    };

    this.deleteBook = function(book) {
      _.remove(books, function(b) {
        return b.id === book.id;
      });

      var author = book.author;
      _.remove(author.books, function(b) {
        return b === book.id;
      });
    };

    this.editBook = function(book) {
      var originalBookIndex = _.findIndex(books, { 'id': book.id });

      books[originalBookIndex] = book;

    };

    this.editAuthor = function(author) {
      var originalAuthorIndex = _.findIndex(authors, { 'id': author.id });

      authors[originalAuthorIndex] = author;

    };

  });
