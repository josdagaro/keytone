export const defaultConfigurationBlock = [
	'$urlRouterProvider',
	$urlRouterProvider => { $urlRouterProvider.otherwise('/'); }
];

export const locationConfigurationBlock = [
  	'$locationProvider',
	$locationProvider => {
		$locationProvider.html5Mode({
			enabled: false, requireBase: false
		});
	}
];

export const trackingRunBlock = [
  	'$trace', $trace => $trace.enable(1)
];
