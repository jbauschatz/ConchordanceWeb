angular.module('conchordance')
    .directive('instrumentSelector', [function() {
        return {
            restrict: 'E',
            templateUrl: 'views/instrumentSelector.html',
            scope: {
                instruments: '=',
                selectedInstrument: '='
            },
            link: function(scope, element, attrs) {
            }
        };
    }]);