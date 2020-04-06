module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'no-babel.js'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['compass']
            },
            /*cssmin: {
                files: ['css/*.css'],
                tasks: ['cssmin']
            },*/
            scripts: {
                files: 'js/*.js',
                tasks: ['concat']
            },
            babel: {
                files: 'no-babel.js',
                tasks: ['babel']
            },
            /*jsmin: {
                files: 'scripts.js',
                tasks: ['uglify']
            }*/
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-transform-arrow-functions"]
            },
            dist: {
                files: {
                    'scripts.js': 'no-babel.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'scripts.min.js': ['scripts.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './css',
                    src: ['*.css', '!*.min.css'],
                    dest: './cssmin',
                    ext: '.css'
                }]
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['watch']);
}