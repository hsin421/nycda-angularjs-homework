describe("Detail", function () {
    var $scope,
        controller;

    beforeEach(module('questions'));
    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('Detail', {$scope: $scope});
    }));

    describe("onSelectAnswer", function () {
        var question;

        beforeEach(function () {
            question = {question: "What is your name?"};
        });

        it("Should set the answer property of the question to the option provided", function () {
            $scope.onSelectAnswer(question, "Mike");
            expect(question.answer).toEqual("Mike");
        });

    describe("colorResponse", function (){
        var question;
        var options;

        beforeEach(function () {
            question = {question: "What is your name?"};
            options = [{value: "Frank"},{value: "Trevor", correct: true}, {value: "Zach"}]
        });

        it("Should return btn-default as a class name if answer is not selected", function(){
            $scope.onSelectAnswer(question, null);
            expect($scope.colorResponse(question, options[0])).toEqual("btn-default");
        });

        it("Should return btn-primary-false as a class name if non-correct answers are selected", function (){

             $scope.onSelectAnswer(question, options[0]);
             expect($scope.colorResponse(question, options[0])).toEqual("btn-primary-false");
        });

        it("Should return btn-primary-true as a class name if correct answer is selected", function () {
             $scope.onSelectAnswer(question, options[1]);
             expect($scope.colorResponse(question, options[1])).toEqual("btn-primary-true");

        });
  

        });

    });
});