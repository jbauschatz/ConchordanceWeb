angular.module('conchordance')
.controller('instrument', ['$scope', 'conchordanceURL', 'midi', function($scope, conchordanceURL, midi) {

        $scope.showTuning = function() {
            if ($scope.selections.instrument) {
                var notes = new Array($scope.selections.instrument.tuning.length);
                for (var i = 0; i<notes.length; ++i)
                    notes[i] = $scope.selections.instrument.tuning[notes.length-i-1];
                $scope.instrumentSelections.tuningNotes = notes;
            }
        }

        $scope.instrumentSelections = {
            selectedNote: null,
            selectedNoteArray: null,
            tuningNotes: null
        };

        $scope.$watch('selections.instrument', function() {
            conchordanceURL.showParameters($scope.parameters,
                null,
                null,
                $scope.selections.instrument,
                null);

            $scope.showTuning();
        });

        $scope.$watch('instrumentSelections.selectedNote', function() {
            if ($scope.instrumentSelections.selectedNote) {
                $scope.instrumentSelections.selectedNoteArray = [$scope.instrumentSelections.selectedNote];
                midi.playNote($scope.instrumentSelections.selectedNote);
            }
            else {
                $scope.instrumentSelections.selectedNoteArray = [];
            }
        });
	}
]);