module.exports = {
	options: {
		args: ["--verbose","-rlptD", "--dry-run"], /* remove --dry-run after initial setup*/
		exclude: [
		".git*","*.scss","Thumbs.db",".DS_Store","sftp-config.json",
        "/src","/grunt","Gruntfile.js",".jshintrc",
        "/bower_components","bower.json","/node_modules","package.json",
        ".htaccess",
		"/site/config.php","/site/config-dev.php","robots.txt",
        "/site/assets/logs","/site/assets/sessions","/site/assets/cache"
      ],
      recursive: true
  },
  staging: {
  	options: {
  		src: "<%=settings.rsync.src%>",
  		dest: "<%=settings.rsync.dest%>",
      host: "<%=settings.rsync.host%>",
  		syncDestIgnoreExcl: true
  	}
  }
}
