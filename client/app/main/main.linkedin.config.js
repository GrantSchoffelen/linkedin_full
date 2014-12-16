angular.module('linkedinFullstackApp')
	.config(function($linkedInProvider) {
	   $linkedInProvider
	   		.set('appKey', '786reoygk0xat4')
	   		.set('scope', 'r_fullprofile r_network')
	   		.set('authorize', true);

	});