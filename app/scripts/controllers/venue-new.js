'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:VenueNewCtrl
 * @description
 * # VenueNewCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
	.controller('VenueNewCtrl', function ($scope, $resource) {
		$scope.newVenue = {};
		$scope.addVenue = function () {
    window.alert('save!');
    var venueResource = $resource('/venues/new', {
				name: $scope.newVenue.name,
				id: $scope.newVenue.id
			});
			venueResource.save();
		};
	});