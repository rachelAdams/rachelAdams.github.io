---
layout: post
title: "Angular: Quick Reference"
date: 2015-11-29
---

Quick notes on defining defining modules, directives, controllers, and services in Angular. All snippets below correspond to examples in the Sandbox section.

##In app.js:

###Defining a module:

Assuming there are controllers.js and services.js files included


	angular.module( 'myApp', [ 'myApp.controllers', 'myApp.services' ] ); 



###Defining a directive:


	angular.module('myApp')
	.directive('mySharedScope', function () {
    	return {
    		template: "some reusable html template here"
    	};
	});



##In services.js:

###Defining a service:


	angular.module('myApp.services', [])
	.factory('myService', function($http) {
	});


###Creating a method:


	angular.module('myApp.services', [])
	.factory('myService', function($http) {
    	var myObject = {};
    	myObject.getResults = function() {
    		return $http({
        		method: 'JSONP', 
        		url: '/some-url'
      		});
    	}
    	return myObject;
	});


##In controllers.js:

###Defining a controller:


	angular.module('myApp.controllers', [])
	.controller('myCtrl', function ($scope, myService) {
	});

###Using your service in your controller:


	angular.module('myApp.controllers', [])
	.controller('myCtrl', function ($scope, myService) {
		myService.getResults().success(function (response) {
	    	$scope.results = response.something;
	    });
	});

