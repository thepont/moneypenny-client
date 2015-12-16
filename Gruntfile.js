module.exports = function(grunt){
    grunt.initConfig({
//        mochaTest: {
//            test: {
//                options: {
//                    require: './tests/blanket',
//                    reporter: 'spec',
//                    quiet: false, // Optionally suppress output to standard out (defaults to false)
//                },
//                src: ['**/__test__/*.js']
//            },
//            coverage:{
//                options : {
//                    require: './tests/bable-setup.js',
//                    reporter: 'html-cov',
//                    quiet: false,
//                    captureFile: 'coverage.html'
//                },
//                src: ['**/__test__/*.js']
//            }
//        }

        jshint:{
             options:{
                esnext: true,
                asi: true,
                shadow: false
             },
             all: ['Gruntfile.js', 'app/**/*.js']
        },
        mocha_istanbul: {
            target : {
                options : {
                    dryRun: true,
                    ui: true,
                    scriptPath: require.resolve('babel-istanbul'),
                    //istanbulOptions: '--use-babel-runtime',
                    //require: './tests/bable-setup.js'
                    //mochaOptions: '--require ./tests/bable-setup.js' 
                }
            },
            //coverage:{
            //    src: 'app/**/__test__/*.js'
            //},
            coverage:{
                src: 'app/**/__test__/*.js',
                options : {
//                     dryRun: true,
                     root: './app',
//                     root: './app/moneypenny-client',
//                     root: './app/moneypenny-mongo-storage',
                     excludes: ['**/__test__/*.js', 'test-utils/**'],
                     print: 'detail',
                     recursive: true,
                     //require: './tests/bable-setup.js',
                     istanbulOptions: ['--include-all-sources'],
                     reportFormats:  ['lcov', 'html']
                }
            }
            //coverage: {
            //    src: ['app/**/__test__/*.js'], 
            //    options : {
            //        dryRun: false,
            //        coverageFolder: 'coverage',
            //        root: './app/moneypenny-server',
            //        excludes: ['**/__test__/*.js'],
            //        print: 'detail',
                    //scriptPath: require.resolve('babel-istanbul'),
                    //istanbulOptions: ['--use-babel-runtime'],
                    //mochaOptions: ['require ./tests/bable-setup.js'],
            //        require: './tests/bable-setup.js',
            //        recursive: true,
            //        istanbulOptions: ['--include-all-sources']
                    // reportFormats:  ['lcov', 'html'] 
            //    }
            //}
        },
        coveralls: {
        // Options relevant to all targets
            options: {
              // When true, grunt-coveralls will only print a warning rather than
              // an error, to prevent CI builds from failing unnecessarily (e.g. if
              // coveralls.io is down). Optional, defaults to false.
              force: false
            },

            post_lcov: {
            // LCOV coverage file (can be string, glob or array)
                src: 'coverage/lcov.info',
                options: {
                    // Any options for just this target
                }
            },
        },
    });
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', ['jshint' ,'mocha_istanbul:coverage', 'coveralls:post_lcov']);

};


