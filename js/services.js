angular.module('rachelApp.services', []).
  factory('githubApiService', function($http) {

    var githubApi = {};

    githubApi.getRepos = function() {
      return $http({
        method: 'GET', 
        url: 'https://api.github.com/users/racheladams/repos'
      });
    }

    return githubApi;
  });
