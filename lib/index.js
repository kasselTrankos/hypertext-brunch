var virtualdomCompiler,
  findFiles = require('./findFiles');
module.exports = virtualdomCompiler =(function(){
  var params;
  function virtualdomCompiler(config){
    params = config.plugins.virtualdom;
  }

  virtualdomCompiler.prototype.brunchPlugin = true;
  virtualdomCompiler.prototype.type = 'template';
  virtualdomCompiler.prototype.extension = 'js';


  virtualdomCompiler.prototype.lint = function (data, path, callback) {
    findFiles(params.pattern).all();
    return callback();
  }
  return virtualdomCompiler;
})();
