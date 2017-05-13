angular.module('AirplaneApp').controller('AllPlanesCtrl', ['$scope', 'PlanesFactory',
    function($scope, PlanesFactory) {
        PlanesFactory.getPlanes().then(function(res) {
            $scope.planes = res.data;
        });

    }
]);
