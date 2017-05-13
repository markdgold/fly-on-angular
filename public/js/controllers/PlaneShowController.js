angular.module('AirplaneApp').controller('PlaneShowCtrl', ['$scope', '$stateParams', 'PlanesFactory',
    function($scope, $stateParams, PlanesFactory) {
        PlanesFactory.getPlane($stateParams.id).then(function(res) {
            $scope.airplane = res.data;
        });

        console.log('plane show ctrl');
    }
]);
