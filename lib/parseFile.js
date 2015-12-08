var fs = require('fs');
var parseFile = function(file)
{
  var _file = file;
  var ENCODING = 'utf8';
  return {
    toDom:toDom
  }
  function toDom(callback){
    fs.readFile(_file, ENCODING, function (err, data) {
      if(err) console.log(err, 'error');//throw err;
      if(callback) callback(data);
    });
  }
}
module.exports = parseFile;
