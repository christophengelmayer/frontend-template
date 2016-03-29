module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.loadTasks('__src_path__/grunt/tasks');
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    settings: grunt.file.readJSON('__src_path__/grunt/settings.json')
  };

  grunt.util._.extend(config, loadConfig('./__src_path__/grunt/options/'));
  grunt.initConfig(config);
}

function loadConfig(path) {
  var glob = require('glob'), object = {}, key;
  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });
  return object;
}
