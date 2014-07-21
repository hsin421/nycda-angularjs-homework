angular.module('questions').controller('Detail',
    ['$scope',
        function ($scope) {
        	

            $scope.onSelectAnswer = function (question, option) {
                question.answer = option;
            };

            $scope.colorResponse = function (question, option){
                if (question.answer == option){
                	if (option.correct){
                		return 'btn-primary-true'
                	}else{
                		return 'btn-primary-false'
                	}
                }else{
                	return 'btn-default'
                }

            }

        }]);