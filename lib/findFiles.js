var fs = require('fs'),
  path = require('path');
var findFiles = function(extension)
{
  var files = [];
  return {
    all: all
  };


  function all(pathSource){
    if(typeof(pathSource)=='undefined') pathSource = 'app';
    var paths = fs.readdirSync(pathSource);
    var i=0, l=paths.length;

    for(i;i<l;i++)
    {
      var _pathSource = path.join(pathSource, paths[i]);
      if(!__isDir(_pathSource)){
        if(__isValidFile(_pathSource)) files.push(_pathSource);
      }else{
        all(_pathSource);
      }
    }
    console.log(files, ' cuanto lo llamaslll?');

  }

  function __isValidFile(file){
    return extension.test(file);
  }

  function __isDir(path){
    return fs.lstatSync(path).isDirectory();
  }
}
module.exports = findFiles;
