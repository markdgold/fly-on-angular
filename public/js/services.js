angular.module('AirplaneApp').factory('PlanesFactory', ['$http', function($http) {
    return {
        getPlanes: function() {
            console.log('getPlanesFactory');
            return $http.get('/api/airplanes');
        },
        getPlane: function(id) {
            return $http.get('/api/airplanes/' + id);
        }

    };
}]);
