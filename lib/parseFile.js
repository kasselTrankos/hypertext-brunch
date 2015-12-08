var fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp');
var parseFile = function(file)
{
  var _file = file;
  var ENCODING = 'utf8';
  return {
    toDom:toDom,
    toFile: toFile
  }
  function toFile(data, callback){
    var preFile = _file.split(path.sep);
    var name = preFile[preFile.length-1].split('.')[0]+'.js';
    preFile.splice(-1, 1);
    var newFile = preFile.join(path.sep)+'/'+name;

    fs.writeFile(newFile, JSON.stringify(data), function(err){
      if(err) console.log(err, 'error');
      if(callback) callback(newFile);
    });
  }
  function toDom(callback){
    fs.readFile(_file, ENCODING, function (err, data) {
      if(err) console.log(err, 'error');//throw err;
      if(callback) callback(data);
    });
  }
}
module.exports = parseFile;
