angular.module('rachelApp.controllers', [])
.controller('rachelCtrl', function ($scope, githubApiService) {
    $scope.name = "Rachel Adams";

        githubApiService.getRepos().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.repos = response;
    });
});
