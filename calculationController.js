testApp.controller('calculationController', function($scope) {
	$scope.personsCount=28;
	$scope.noOfBiscs = 13;
	$scope.priceFromOrg= 21;
    $scope.countEatsBiscs=$scope.personsCount-($scope.personsCount*(20/100));
	
	$scope.calculate = function(vehicleCount, totalKm) {
		$scope.onePersonCanEat = totalKm/3;
		$scope.costPerPerson = ($scope.priceFromOrg/$scope.noOfBiscs)*$scope.onePersonCanEat;
		$scope.costPerVehicle = $scope.countEatsBiscs * $scope.costPerPerson; 
      };
	$scope.clearFields = function() {
		$scope.vehicleCount=null;
		$scope.totalKm=null;
		$scope.costPerPerson=null;
		$scope.costPerVehicle=null;
	};
});