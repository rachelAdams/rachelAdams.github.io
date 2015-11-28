angular.module('rachelApp.controllers', [])
.controller('rachelCtrl', function ($scope, githubApiService) {
    $scope.name = "Rachel Adams";
	$scope.localStorageVal = localStorage.getItem("localVal");
    githubApiService.getRepos().success(function (response) {
    //Dig into the responde to get the relevant data
    $scope.drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    $scope.addDriver = function(){
         	
    }

	$scope.saveToLocalStorage = function(){
		if(typeof(Storage) !== "undefined") {
    		localStorage.setItem("localVal", $scope.localStorageVal); // Code for localStorage/sessionStorage.
		} 
	}
        
    });
});
