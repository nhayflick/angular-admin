'use strict';

describe('Filter: venueLive', function () {

  // load the filter's module
  beforeEach(module('angularAdminApp'));

  // initialize a new instance of the filter before each test
  var venueLive;
  beforeEach(inject(function ($filter) {
    venueLive = $filter('venueLive');
  }));

  it('should return the input prefixed with "venueLive filter:"', function () {
    var text = 'angularjs';
    expect(venueLive(text)).toBe('venueLive filter: ' + text);
  });

});
