angular.module('conchordance').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/chordExplorer');

    $stateProvider
        .state('chordExplorer', {
            url: '/chordExplorer',
            templateUrl: 'views/chordExplorer.html'
        })
        .state('chordTheory', {
            url: '/chordTheory',
            templateUrl: 'views/chordTheory.html'
        })
        .state('chordDetails', {
            url: '/chordDetails',
            templateUrl: 'views/chordDetails.html'
        })
        .state('instruments', {
            url: '/instruments',
            templateUrl: 'views/instrumentExplorer.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'views/profile.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html'
        });
});
