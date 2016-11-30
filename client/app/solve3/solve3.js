'use strict';

angular.module('tidbitsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/14102000', {
        templateUrl: 'app/solve3/solve3.html',
        controller: 'Solve3Ctrl',
        authenticate: true
      });
  });
