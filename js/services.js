angular.module('rachelApp.services', []).
  factory('githubApiService', function($http) {

    var githubApi = {};

    githubApi.getRepos = function() {
      $http.get({
        url: 'https://api.github.com/users/racheladams/repos',
      });
    }

    return githubApi;
  });
