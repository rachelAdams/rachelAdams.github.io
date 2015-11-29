angular.module('rachelApp.controllers', [])
.controller('rachelCtrl', function ($scope, githubApiService) {
    $scope.name = "Rachel Adams";
	$scope.currentLocalVal = localStorage.getItem("localVal");


    githubApiService.getRepos().success(function (response) {
    	$scope.drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

    $scope.addDriver = function(){
         	
    }

	$scope.saveToLocalStorage = function(){
		if(typeof(Storage) !== "undefined") {
    		localStorage.setItem("localVal", $scope.newLocalVal); 
    		$scope.currentLocalVal = $scope.newLocalVal;
		} 
	}
        

});
