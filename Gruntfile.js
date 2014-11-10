module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ['*.js']
    },

    jscs: {
      src: '*.js',
      options: {
        config: '.jscsrc'
      }
    }

  });

  grunt.registerTask('test', ['jshint', 'jscs']);
};
