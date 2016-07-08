'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularTutorialApp
 */

(function() {
  angular
    .module("yeomanAngularTutorialApp")
    .controller("MainCtrl", MainCtrl);

  function MainCtrl($location) {
    var vm = this;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function init() {
      vm.$location = $location;
    }
    init();
  }
})();
