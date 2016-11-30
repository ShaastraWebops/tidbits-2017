'use strict';

angular.module('tidbitsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/04111996', {
        templateUrl: 'app/solve2/solve2.html',
        controller: 'Solve2Ctrl',
        authenticate: true
      });
  });
