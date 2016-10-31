'use strict';

/**
 * @ngdoc overview
 * @name yeomanAngularTutorialApp
 * @description
 * # yeomanAngularTutorialApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAngularTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/books', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl',
        controllerAs: 'library'
      })
      // .when('/book', {
      //   templateUrl: 'views/bookdetails.html',
      //   controller: 'BookdetailsCtrl',
      //   controllerAs: 'bookDetails'
      // })
      .when('/book/:bookId', {
        templateUrl: 'views/bookdetails.html',
        controller: 'BookdetailsCtrl',
        controllerAs: 'bookDetails'
      })
      .when('/book', {
        templateUrl: 'views/bookforms.html',
        controller: 'BookformsCtrl',
        controllerAs: 'bookForms'
      })
      .when('/book/edit/:bookId', {
        templateUrl: 'views/bookforms.html',
        controller: 'BookformsCtrl',
        controllerAs: 'bookForms'
      })
      // .when('/author', {
      //   templateUrl: 'views/authordetails.html',
      //   controller: 'AuthorCtrl',
      //   controllerAs: 'author'
      // })
      .when('/author/:authorId', {
        templateUrl: 'views/authordetails.html',
        controller: 'AuthorDetailsCtrl',
        controllerAs: 'author'
      })
      .when('/authors', {
        templateUrl: 'views/authors.html',
        controller: 'AuthorCtrl',
        controllerAs: 'author'
      })
      .when('/author', {
        templateUrl: 'views/authorforms.html',
        controller: 'AuthorformsCtrl',
        controllerAs: 'authorForms'
      })
      .when('/author/edit/:authorId', {
        templateUrl: 'views/authorforms.html',
        controller: 'AuthorformsCtrl',
        controllerAs: 'authorForms'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
