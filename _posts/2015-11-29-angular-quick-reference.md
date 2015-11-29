---
layout: post
title: "Angular: Quick Reference"
date: 2015-11-29
---

Quick notes on defining defining modules, directives, controllers, and services in Angular. All snippets below correspond to examples in the Sandbox section.

##In app.js:

###Defining a module:

Assuming there are controllers.js and services.js files included

```
angular.module( 'myApp', [ 'myApp.controllers', 'myApp.services' ] ); 
```


###Defining a directive:

```
angular.module('myApp')
.directive('mySharedScope', function () {
    return {
    	template: "<span ng-bind='driver.Driver.givenName'></span> <span ng-bind='driver.Driver.familyName'></span><br /> <a href='driver.Driver.url'>Wikipedia</a>" //your template here
    };

});
```


##In services.js:

###Defining a service:

```
angular.module('myApp.services', [])
.factory('racecarDriverService', function($http) {
	//methods, etc here
 });
```

###Creating a method:

```
angular.module('myApp.services', [])
.factory('racecarDriverService', function($http) {
    var racecarDrivers = {};
    racecarDrivers.getDrivers = function() {
    	return $http({
        	method: 'JSONP', 
        	url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      	});
    }
    return racercarDrivers;
});
```


##In controllers.js:

###Defining a controller:

```
angular.module('myApp.controllers', [])
.controller('myCtrl', function ($scope, racerDriverService) {
	// methods, etc here
});
```

 ###Using your service in your controller:

```
 angular.module('myApp.controllers', [])
.controller('myCtrl', function ($scope, racerDriverService) {
	racecarDriverService.getDrivers().success(function (response) {
    	$scope.drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
});
```
