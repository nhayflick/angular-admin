'use strict';

/**
 * @ngdoc filter
 * @name angularAdminApp.filter:venueLive
 * @function
 * @description
 * # venueLive
 * Filter in the angularAdminApp.
 */
angular.module('angularAdminApp')
	.filter('venueLive', function () {
		return function (input) {
			return input ? 'glyphicon-volume-up' : 'glyphicon-volume-off';
		};
	});