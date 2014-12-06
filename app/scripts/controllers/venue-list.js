'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:VenueIndexCtrl
 * @description
 * # VenueIndexCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
	.controller('VenueListCtrl', function ($scope, venues) {
		$scope.venues = venues;
		$scope.orderProp = 'name';
	});