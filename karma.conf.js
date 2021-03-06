module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      
      {pattern: 'app/**/*-module.js'},
      {pattern: 'app/**/*-controller.js'},
      {pattern: 'app/**/*-controller-test.js'},
      {pattern: 'app/**/*-service.js'},
      {pattern: 'app/**/*-service-test.js'},
      {pattern: 'app/**/*-factory.js'},
      {pattern: 'app/**/*-factory-test.js'}
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
//      {pattern: 'app/**/*.js'},