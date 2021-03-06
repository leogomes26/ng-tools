// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],
		reporters: ['progress'],
		// list of files / patterns to load in the browser
		files: [
			'./../test/matchers.js',
			'./../bower_components/angular/angular.js',
			'./../bower_components/angular-mocks/angular-mocks.js',
			'./../src/module.js',
			'./../src/**/*.js',
			{pattern: '**/*.jpg', watched: false, included: false, served: true},
			'./../test/spec/**/*.js'
		],

		// web server port
		port: 8090,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
//	  http://localhost:9001/

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			'PhantomJS'
//        'Chrome'
		],


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};