---
layout: post
title: "Angular: Quick Reference"
date: 2015-11-29
---
<p>Quick notes on defining defining modules, directives, controllers, and services in Angular. All snippets below correspond to examples in the Sandbox section.</p>

<h1>In app.js:</h1>
<h2>Defining a module:</h2>
<p>Assuming there are controllers.js and services.js files included</p>
<code>angular.module( 'myApp', [ 'myApp.controllers', 'myApp.services' ] ); </code>


<h2> Defining a directive:</h2>
<code>angular.module('myApp')
.directive('mySharedScope', function () {
    return {
        template: "<span ng-bind='driver.Driver.givenName'></span> <span ng-bind='driver.Driver.familyName'></span><br /> <a href='driver.Driver.url'>Wikipedia</a>" //your template here
    };

});
</code>


<h1>In services.js:</h1>
<h2>Defining a service:</h2>
<code>angular.module('myApp.services', []).
  factory('racecarDriverService', function($http) {
   //methods, etc here
  });
</code>

<h2>Creating a method:</h2>
<code>angular.module('myApp.services', []).
  factory('racecarDriverService', function($http) {

    var racecarDrivers = {};

    racecarDrivers.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return racercarDrivers;
  });
</code>


<h1>In controllers.js:</h1>
<h2>Defining a controller:</h2>
<code>
angular.module('myApp.controllers', [])
.controller('myCtrl', function ($scope, racerDriverService) {
// methods, etc here
});
 </code>
 <h2>Using your service in your controller:</h2>
 <code>
 angular.module('myApp.controllers', [])
.controller('myCtrl', function ($scope, racerDriverService) {

    racecarDriverService.getDrivers().success(function (response) {
    	$scope.drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
});
 </code>
