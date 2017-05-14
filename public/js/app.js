var app = angular.module('AirplaneApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'views/404.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('addNew', {
                url: '/addNew',
                templateUrl: 'views/addNew.html',
                controller: 'NewPlaneCtrl'
            })
            .state('planes', {
                url: '/',
                templateUrl: 'views/airplanes.html',
                controller: 'AllPlanesCtrl'
            })
            .state('airplaneShow', {
                url: '/plane/:id',
                templateUrl: 'views/airplaneShow.html',
                controller: 'PlaneShowCtrl'
            });

        $locationProvider.html5Mode(true);

    }
]);
