'use strict';

describe('Controller: VenueNewCtrl', function () {

	// load the controller's module
	beforeEach(module('angularAdminApp'));

	var VenueNewCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		VenueNewCtrl = $controller('VenueNewCtrl', {
			$scope: scope
		});
	}));

	it('should attach a blank new venue to the scope', function () {
		expect(scope.newVenue).toEqual({});
	});
});