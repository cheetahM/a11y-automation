module.exports = function(grunt) {
  // Do grunt-related things in here
  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        a11y: {
            dev: {
                options: {
                    urls: ["www.twitter.com"]
                }
            }
        }
    });

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-a11y');
// Default task(s).
//grunt.registerTask('default', ['uglify']);
// A very basic default task.
  grunt.registerTask('default', ['a11y']);
};