'use strict';

angular.module('tidbitsApp')
  .controller('Solve2Ctrl', function ($scope, $http) {

    var converter = new showdown.Converter();
    $scope.xmark = function (b) {
      return converter.makeHtml(b);
    };

  	$scope.refresh = function () {
	  	$http.get('/api/users/me').then(function (res) {
          console.log(res);
        $scope.disqualified = res.data.disqualified;
	  		$scope.solvedQuestions = res.data.solved2;
	  		$http.get('/api/questions/next2/').then(function (res) {
          console.log("Hello");
	  		  if(res.data == "") {
	  		  	$(".nq").hide();
	  		  	$(".nnq").show();
	  		  } else {
	  		    $scope.nextQuestion = res.data.question;
            $scope.nextQuestionHints = res.data.hints;
            $scope.nextQuestionDisplayHints = res.data.displayHints;
	  		    $scope.nextQuestionID = res.data._id;
	  		  }
	  		});
	  	});
	  };
	
    $scope.refresh();
    
  	$scope.subAns = function() {
  	  $http.post('/api/answers/' + $scope.nextQuestionID + '/2', { answer: $scope.answer })
        .then(function (res) {
    	  	if(res.status == 200) {
    	  		$scope.refresh();
  	  	    $scope.correct = "Correct answer!";
  	  	    $scope.wrong = "";
  	  	    $scope.answer = "";
    	  	}
    	  	else {
    	  	  $scope.wrong = "Wrong answer!";
    	  	  $scope.correct = "";
    	  	}
    	  });
  	};

    $scope.showHintsCheck = false;
    $scope.showHints = function() {
      $scope.showHintsCheck = true;
    };
  
  });
