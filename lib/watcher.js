var chokidar = require('chokidar');
var watcher = function(route){
  var _route = route;
  return{
    start: start
  }
  function start(extension, callback){
    console.log(_route, ' pal', extension);
    chokidar.watch(_route, {ignored: /[\/\\]\./}).on('all', function(event, path) {
      if(extension.test(path)) callback(event, path);
    });
  }

};
module.exports = watcher;
