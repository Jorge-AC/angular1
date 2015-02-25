module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   connect: {
     server: {
       options: {
        port: 7000,
        base: 'site/'
      }
    }
   },
   watch: {
    project: {
     files: ['site/**/*.js', 'site/**/*.css', 'site/**/*.html', 'site/**/*.json', 'site/**/*.scss', 'site/images/*.png'],
     options: {
       livereload: true
     }
    },
    compass: {
      files: ['site/**/*.scss'],
      tasks: ['compass:dev']
    }
   },
   compass: {                   
    dev: {                    
      options: {
	basePath: 'site', 
        sassDir: 'sass',
        cssDir: 'stylesheets',
	imagesDir: 'images'
      }
    }
  }  
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'compass', 'watch']);
};
