'use strict';


module.exports = function less(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-less');

    // Options
    return {
        build: {
            options: {
                cleancss: false
            },
            files: [{
                expand: true,
                cwd: '.dist/public/css',
                src: ['**/*.less'],
                dest: '.dist/.build/css/',
                ext: '.css'
            }]
        }
    };
};
