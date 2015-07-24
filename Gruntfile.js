module.exports = function(grunt) {
  grunt.initConfig({
     uglify: {
		 my_target: {
      files: {
        'assets/scripts/output.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js']
      }
    }
     }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
