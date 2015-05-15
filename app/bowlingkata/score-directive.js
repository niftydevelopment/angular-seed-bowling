angular.module('bowling')
    .directive('score', ['BowlingService', function(bs) {
        return {
            restrict: 'E',
            templateUrl: 'bowlingkata/score.html',
            link: function($scope, $element) {
                var vm = $scope;

                vm.notLoaded = true;
                vm.loading = false;
                vm.loaded = false;
             	vm.woops = false;

                vm.fetchScore = function() {
                	handleLoadedState(2);

                    var promise = bs.fetchScore();

                    promise.then(function(score) {
                    	console.debug('päng hämtade');
                        vm.score = score;
                        handleLoadedState(3);
                    }, function(reason) {
                    	console.debug('poäng kunde inte hämtas');
                        vm.score = 0;
                    	handleLoadedState(4);
                    });
                }

                var handleLoadedState = function(phase) {
                    if (phase == 2) {
                        vm.notLoaded = false;
                        vm.loading = true;
                        vm.loaded = false;
                    } else if (phase == 3) {
                        vm.notLoaded = false;
                        vm.loading = false;
                        vm.loaded = true;
                    } else {
                    	vm.notLoaded = false;
                        vm.loading = false;
                        vm.loaded = false;
                        vm.woops = true;
                    }

                }
            }
        }
    }]);
