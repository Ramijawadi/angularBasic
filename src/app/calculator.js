angular.module('myApp').service('CalculatorService', function() {
    this.add = function(a, b) {
        return a + b;
    };
});