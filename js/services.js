angular.module('rachelApp.services', []).
  factory('githubApiService', function($http) {

    var githubApi = {};

    githubApi.getRepos = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return githubApi;
  });
