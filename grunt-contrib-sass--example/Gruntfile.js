module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.initConfig({
    sass: {

      options: {
        // Load the JsonImporter to make it possible to import `.json`
        // using `@import "path/to/file.json?varname"
        require : './node_modules/sassyjson/lib/JsonImporter.rb',

        // Add the sassyjson/stylesheets folder to the loadPath to make it possible
        // to use `@import "SassyJSON"` to import SassyJSON.
        loadPath: ['./node_modules/sassyjson/stylesheets']
      },

      // Basic task
      main : {
        files: [

          { src: 'src/main.scss', dest: 'dist/css/main.css' },
        ]
      }

    }
  });

};