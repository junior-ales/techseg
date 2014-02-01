module.exports = function(grunt) {
  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [path.join(__dirname,'public','css','tmp')],
    watch: {
      files: [
        'views/**/*.html',
        'sass/**/*.scss',
        'public/js/**/*.js'
      ],
      tasks: ['sass', 'clean', 'reload']
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/css/tmp/techseg.css': path.join(__dirname,'sass','css','techseg.scss')
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("reload", "reload Chrome on OS X", function() {
    require("child_process").exec("osascript " +
        "-e 'tell application \"Google Chrome\" " +
          "to tell the active tab of its first window' " +
        "-e 'reload' " +
        "-e 'end tell'");
  });

  grunt.registerTask('default', ['watch']);
};
