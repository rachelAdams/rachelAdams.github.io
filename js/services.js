angular.module('rachelApp.services', []).
  factory('githubApiService', function($http) {

    var githubApi = {};

    githubApi.getRepos = function() {
      return $http({
        method: 'JSONP', 
        url: 'https://api.github.com/users/racheladams/repos'
      });
    }

    return githubApi;
  });