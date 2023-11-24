// calculator.service.spec.js
describe('CalculatorService', function() {

    beforeEach(module('myApp')); // Charge le module AngularJS de l'application

    var CalculatorService;

    beforeEach(inject(function(_CalculatorService_) {
        CalculatorService = _CalculatorService_;
    }));

    it('devrait ajouter deux nombres correctement', function() {
        var result = CalculatorService.add(2, 3);
        expect(result).toEqual(5);
    });

    it('devrait gérer des nombres négatifs', function() {
        var result = CalculatorService.add(-2, 3);
        expect(result).toEqual(1);
    });

});
