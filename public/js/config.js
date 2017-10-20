System.config({
    transpiler: false,
    defaultJSExtensions: true,

    packages: {
        'app': {
            'defaultExtension': 'js'
        }
    },

    paths: {
        'npm:*': 'node_modules/*'
    },

    meta: {
        'npm:angular/angular.min': {
            format: 'global',
            exports: 'angular'
        }
    },

    map: {
        'angular': 'npm:angular/angular.min',
        'angular-ui-router': 'npm:angular-ui-router/release/angular-ui-router',
        'angular-animate': 'npm:angular-animate/angular-animate.min',
        'css': 'npm:systemjs-plugin-css/css',
        'd3': 'npm:d3/d3.min',
        'font-awesome': 'npm:font-awesome',
        'hammerjs': 'npm:hammerjs/hammer.min',
        'angular-hammer': 'npm:angular-hammer/angular.hammer.min'
    }
});

System.import('transpiled/bootstrap/index');
