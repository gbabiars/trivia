'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            compile: {
                files: ['client/js/**/*.js'],
                tasks: ['compile']
            },
            emberTemplates: {
                files: ['client/templates/**/*.hbs'],
                tasks: ['emberTemplates']
            }
        },

        jshint: {
            client: ['client/js/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        emberTemplates: {
            compile: {
                options: {
                    templateName: function(sourceFile) {
                        console.log(sourceFile);
                        return sourceFile.replace(/client\/templates\//, '');
                    }
                },
                files: {
                    'public/js/compiled-templates.js': 'client/templates/**/*.hbs'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        concat: {
            dist: {
                src: [
                    'client/js/trivia.js',
                    'client/js/models/*.js',
                    'client/js/controllers/*.js',
                    'client/js/views/*.js'
                ],
                dest: 'public/js/trivia.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/css/main.css': [
                        'client/css/common.sass'
                    ]
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'public/js/trivia.min.js': ['public/js/trivia.js']
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    'public/css/main.min.css': ['public/css/main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('compile', ['jshint:client', 'concat']);
    grunt.registerTask('dev', ['compile', 'emberTemplates', 'sass']);
    grunt.registerTask('prod', ['dev', 'uglify', 'cssmin']);

};
