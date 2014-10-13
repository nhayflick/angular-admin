'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:VenueDetailCtrl
 * @description
 * # VenueDetailCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
	.controller('VenueDetailCtrl', function ($scope, $stateParams) {
		$scope.venue = {};
		$scope.venue.id = $stateParams.idVenue;
	});