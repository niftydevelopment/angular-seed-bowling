'use strict';

angular.module('bowling', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/signup', {
        templateUrl: 'bowlingkata/signup.html'
    }).when('/bowl', {
        templateUrl: 'bowlingkata/bowl.html'
    });

}])

.service('BowlingService', ['$q', function($q) {
    var bowl = this;

    bowl.game = {
        player: 'No name player',
        frames: []
    }

    bowl.fetchScore = function(name) {
        return $q(function(resolve, reject) {

            setTimeout(function() {
            	var score = 0;

                bowl.game.frames.forEach(function(e) {
                    score += parseInt(e);
                });
                
                resolve(score);
            }, 1000);

        });
    }

}])

.controller('SignupCtrl', ['$location', 'BowlingService', function($location, bs) {
    var signup = this;

    signup.bowl = bs;

    signup.goPlay = function() {
        $location.path('/bowl');
    };
}])

.controller('PlayCtrl', ['BowlingService', function(bs) {
    var play = this;
    play.currentFrame = 0;

    play.bowl = bs;

    play.roll = function() {
        play.bowl.game.frames.push(play.currentFrame);
        play.currentFrame = 0;
    }

}]);
