'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:VenueNewCtrl
 * @description
 * # VenueNewCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
	.controller('VenueNewCtrl', function ($scope, $resource, venues) {
		$scope.newVenue = {};
		$scope.addVenue = function () {
			window.alert('save!');
			var newVenue = {
				name: $scope.newVenue.name,
				id: parseInt($scope.newVenue.id)
			};
			var venueResource = $resource('/venues/new', newVenue);
			venueResource.save();
			venues.push(newVenue);
			document.location.href = '#/venue/' + newVenue.id;
		};
	});