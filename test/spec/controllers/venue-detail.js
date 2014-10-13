'use strict';

describe('Controller: VenueDetailCtrl', function () {

	// load the controller's module
	beforeEach(module('angularAdminApp'));

	var VenuedetailCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $routeParams, $rootScope) {
		scope = $rootScope.$new();
		$routeParams.idVenue = 27;
		VenuedetailCtrl = $controller('VenueDetailCtrl', {
			$scope: scope
		});
	}));

	it('should have the correct venue id', function () {
		expect(scope.venue.id).toBe(27);
	});
});