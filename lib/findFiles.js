var fs = require('fs'),
  path = require('path');
var findFiles = function(extension)
{
  var files = [];
  return {
    all: all
  };


  function all(){
    __findInFolder('app');
  }
  function __findInFolder(pathSource){
    var paths = fs.readdirSync(pathSource);
    var i=0, l=paths.length;
    //console
    for(i;i<l;i++)
    {
      var _pathSource = path.join(pathSource, paths[i]);
      if(!__isDir(_pathSource)){
        if(__isValidFile(_pathSource)) files.push(_pathSource);
      }else{
        __findInFolder(_pathSource);
      }
    }
  }
  function __isValidFile(file){
    return extension.test(file);
  }

  function __isDir(path){
    return fs.lstatSync(path).isDirectory();
  }
}
module.exports = findFiles;
