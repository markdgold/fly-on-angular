angular.module('AirplaneApp').controller('NewPlaneCtrl', ['$scope', '$state', '$stateParams', 'PlanesFactory',
    function($scope, $state, $stateParams, PlanesFactory) {
        $scope.addPlane = function() {
            var newPlane = {
                manufacturer: $scope.newManufacturer,
                model: $scope.newModel,
                engines: $scope.newEngines,
                image: $scope.newImage
            };
            PlanesFactory.addPlane(newPlane).then(res => {
                console.log('plane added');
                $state.go('airplaneShow', { id: res.data._id });
            }).catch(err => {
                $state.go('404')
            });
        };
    }
]);
