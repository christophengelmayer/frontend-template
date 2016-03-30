module.exports = function(grunt) {
  var config = {
    paths: {
        src: "src",
        dist: "dist"
    }
  };

  require('jit-grunt')(grunt);
  config.pkg = grunt.file.readJSON('package.json');
  config.settings = grunt.file.readJSON(config.paths.src+'/grunt/settings.json'),
  grunt.loadTasks(config.paths.src+'/grunt/tasks');
  grunt.util._.extend(config, loadConfig('./'+config.paths.src+'/grunt/options/'));
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
