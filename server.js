/*
=============================================

	** STATIC SERVER **

	 Step:1 npm install static-server --save
	 Step: 2 create file [server.js] inside your project
	 Step: 3 to start the serve run [node server.js]
=============================================

*/



var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist/',  // required, the root of the server file tree, [./dist/] is now my local/project root
  port: 8000 // required, the port to listen [optional] you can name the port number any number you like

});


// Anothe steps

server.start(function () {
  console.log('Server listening to port: ', server.port);
});