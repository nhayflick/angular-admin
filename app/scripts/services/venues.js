'use strict';

/**
 * @ngdoc service
 * @name angularAdminApp.venues
 * @description
 * # venue
 * Factory in the angularAdminApp.
 */
angular.module('angularAdminApp')
	.factory('venues', function () {
		// Service logic
		// ...

		var venues = [{
			name: 'Rockbot HQ',
			id: 10,
			addDate: 1412900333033,
			live: true
		}, {
			name: 'Bar Basic',
			id: 27,
			addDate: 1412903133033,
			live: false
		}, {
			name: 'Anytime Fitness San Francisco',
			id: 1000,
			addDate: 1412903233033,
			live: true
		}, {
			name: 'Anytime Fitness Oakland',
			id: 1001,
			addDate: 1412903333033,
			live: false
		}];

		// Function for retrieving a venue by ID
		venues.get = function (id) {
			for (var i = 0; i < this.length; i++) {
				if (this[i].id === id) {
					return this[i];
				}
			}
		};

		// Public API here
		return venues;
	});