'use strict';

/**
 * @ngdoc function
 * @name questApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the questApp
 */
angular.module('questApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
