angular.module('rachelApp.services', []).
  factory('githubApiService', function($http) {

    var githubApi = {};

    githubApi.getRepos = function() {
      $http.get({
        url: 'https://api.github.com/users/racheladams/repos',
        success: function (data, status, error) {
          githubApi = data;
        },
        error: function (data, status, error) {
          console.log('error', data, status, error);
        }
      });
    }

    return githubApi;
  });
