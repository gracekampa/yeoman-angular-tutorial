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
      .when('/library', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl',
        controllerAs: 'library'
      })
      .when('/bookDetails', {
        templateUrl: 'views/bookdetails.html',
        controller: 'BookdetailsCtrl',
        controllerAs: 'bookDetails'
      })
      .when('/bookForms', {
        templateUrl: 'views/bookforms.html',
        controller: 'BookformsCtrl',
        controllerAs: 'bookForms'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
