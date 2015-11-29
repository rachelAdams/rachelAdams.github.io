
angular.module('rachelApp', [ 'rachelApp.controllers', 'rachelApp.services'])
.directive('mySharedScope', function () {
    return {
        template: "Name: <span ng-bind="driver.Driver.givenName"></span> <span ng-bind="driver.Driver.familyName"></span><br /> Wikipedia: <span ng-bind="driver.Driver.url"></span>"
    };
});
