
angular.module('rachelApp', [ 'rachelApp.controllers', 'rachelApp.services']);



angular.module('rachelApp')
.directive('mySharedScope', function () {
    return {
        template: "<span ng-bind='driver.Driver.givenName'></span> <span ng-bind='driver.Driver.familyName'></span><br /> <a href='driver.Driver.url'>Wikipedia</a>"
    };
});