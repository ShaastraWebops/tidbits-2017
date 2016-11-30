/*'use strict';

describe('Controller: SolveCtrl', function () {

  // load the controller's module
  beforeEach(module('tidbitsApp'));

  var SolveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolveCtrl = $controller('SolveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});*/
'use strict';

describe('Controller: Solve3Ctrl', function() {
  // load the controller's module
  beforeEach(module('tidbitsApp'));

  var scope;
  var Solve3Ctrl;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    Solve3Ctrl = $controller('Solve3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    $httpBackend.flush();
    expect(Solve3Ctrl.awesomeThings.length).toBe(4);
  });
});
