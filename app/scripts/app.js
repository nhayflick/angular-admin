'use strict';

/**
 * @ngdoc overview
 * @name angularAdminApp
 * @description
 * # angularAdminApp
 *
 * Main module of the application.
 */
angular
	.module('angularAdminApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ui.router',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('index');
		$stateProvider
			.state('index', {
				url: '',
				views: {
					'navView': {
						templateUrl: 'views/venue/list.html',
						controller: 'VenueListCtrl'
					}
				}
			}).state('new', {
				url: '/venue/new',
				views: {
					'navView': {
						templateUrl: 'views/venue/list.html',
						controller: 'VenueListCtrl'
					},
					'detailView': {
						templateUrl: 'views/venue/new.html',
						controller: 'VenueNewCtrl'
					}
				}
			})
			.state('detail', {
				url: '/venue/:idVenue',
				views: {
					'navView': {
						templateUrl: 'views/venue/list.html',
						controller: 'VenueListCtrl'
					},
					'detailView': {
						templateUrl: 'views/venue/detail.html',
						controller: 'VenueDetailCtrl'
					}
				}
			});
	});