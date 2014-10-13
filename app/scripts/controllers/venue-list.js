'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:VenueIndexCtrl
 * @description
 * # VenueIndexCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
	.controller('VenueListCtrl', function ($scope) {
		$scope.venues = [{
			name: 'Rockbot HQ',
			id: 10,
			addDate: 1412900333033
		}, {
			name: 'Bar Basic',
			id: 27,
			addDate: 1412903133033
		}, {
			name: 'Anytime Fitness San Francisco',
			id: 1000,
			addDate: 1412903233033
		}, {
			name: 'Anytime Fitness Oakland',
			id: 1001,
			addDate: 1412903333033
		}];
		$scope.orderProp = 'name';
	});