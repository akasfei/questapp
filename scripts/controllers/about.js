'use strict';

/**
 * @ngdoc function
 * @name questApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the questApp
 */
angular.module('questApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
