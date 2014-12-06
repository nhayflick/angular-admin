describe('Admin Homepage', function () {
	beforeEach(function () {
		browser.get('http://localhost:9000/');
	});

	it('should have a title', function () {
		expect(browser.getTitle()).toEqual('Rockbot Admin');
	});

	it('should correctly sort venues by ID', function () {
		element(by.cssContainingText('option', 'ID')).click();
		expect(element.all(by.repeater('venue in venues')).get(0).getText()).toEqual('Rockbot HQ');
	});

	it('should open the venue detail view', function () {
		element(by.id('venue-1001')).click();
		expect(element(by.id('venue-details')).getText()).toEqual('Venue: 1001');
	});

	// it('should open the new venue view', function () {
	//  element(by.id('new-venue')).click();
	//  expect(element(by.css('form')).getText()).toEqual('Venue: 1001');
	// });
});