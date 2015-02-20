

var app = angular.module('timezoneFinderApp', []);

app.controller('MainController', [ '$scope', function($scope){
		// Defines our cities.
	$scope.cities = [
	    { name: 'London', timezone: 'GMT' },
	    { name: 'Tokyo', timezone: 'JST' },
	    { name: 'Melbourne', timezone: 'EDT' },
	    { name: 'Los Angeles', timezone: 'PST' },
	    { name: 'New York', timezone: 'EST' }
	];
	
	// The default city.
	$scope.selectedCity = $scope.cities[0];
}])