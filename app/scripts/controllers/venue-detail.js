'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:VenueDetailCtrl
 * @description
 * # VenueDetailCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
	.controller('VenueDetailCtrl', function ($scope, $stateParams, venues) {
		var id = parseInt($stateParams.idVenue);
		$scope.venue = venues.get(id);
	});