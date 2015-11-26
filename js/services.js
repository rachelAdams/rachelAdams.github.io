angular.module('rachelApp.services', []).
  factory('githubApiService', function($http) {

    var githubRepos = {};

    githubApi.getRepos = function() {
      $http.get({
        url: 'https://api.github.com/users/racheladams/repos',
        success: function (data, status, error) {
          githubRepos = data;
        },
        error: function (data, status, error) {
          console.log('error', data, status, error);
        }
      });
    }

    return githubRepos;
  });
