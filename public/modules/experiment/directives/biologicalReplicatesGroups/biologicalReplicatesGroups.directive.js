(function () {
    'use strict';
    angular
        .module('experiment')
        .directive('pcrBiologicalReplicatesGroups', biologicalReplicatesGroups);
    function biologicalReplicatesGroups() {
        return {
            bindToController: true,
            controller: [
                'experiment.experiment',
                controller
            ],
            controllerAs: 'biologicalReplicatesGroups',
            templateUrl: 'modules/experiment/directives/biologicalReplicatesGroups/biologicalReplicatesGroups.directive.html'
        };
        /**
         * functions
         */
        function controller(
            experiment
        ) {
            var
                vm;
            vm = this;
            vm.experiment = experiment;
            vm.onControlBiologicalReplicatesGroupChange = onControlBiologicalReplicatesGroupChange;
            vm.showChooseControlBiologicalReplicatesGroup = showChooseControlBiologicalReplicatesGroup;
            //
            // functions
            //
            function onControlBiologicalReplicatesGroupChange() {
                experiment.metadata.helpers.coerceModel('controlBiologicalReplicatesGroup');
            }
            function showChooseControlBiologicalReplicatesGroup() {
                return Object.keys(experiment.data.biologicalReplicatesGroups).length > 0;
            }
        }
    }
}());
