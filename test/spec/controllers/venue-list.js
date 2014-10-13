'use strict';

describe('Controller: VenueListCtrl', function () {

	// load the controller's module
	beforeEach(module('angularAdminApp'));

	var VenueCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		VenueCtrl = $controller('VenueListCtrl', {
			$scope: scope
		});
	}));

	it('should attach a list of awesomeThings to the scope', function () {
		expect(scope.venues.length).toBe(2);
	});
});