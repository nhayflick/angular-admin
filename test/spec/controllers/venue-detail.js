'use strict';

describe('Controller: VenueDetailCtrl', function () {

	// load the controller's module
	beforeEach(module('angularAdminApp'));

	var VenuedetailCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $stateParams, $rootScope) {
		scope = $rootScope.$new();
		$stateParams.idVenue = 27;
		VenuedetailCtrl = $controller('VenueDetailCtrl', {
			$scope: scope
		});
	}));

	it('should have the correct venue id', function () {
		expect(scope.venue.id).toBe(27);
	});
});