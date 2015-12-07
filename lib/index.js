var virtualdomCompiler,
  findFiles = require('./findFiles');
module.exports = virtualdomCompiler =(function(){
  var params;
  function virtualdomCompiler(config){
    params = config.plugins.virtualdom;
  }

  virtualdomCompiler.prototype.brunchPlugin = true;
  virtualdomCompiler.prototype.type = 'javascript';
  virtualdomCompiler.prototype.extension = 'js';
  //virtualdomCompiler.prototype.pattern = /\.js$/;


  virtualdomCompiler.prototype.compile = function (args, callback) {
    console.log(args, ' wich compli');
    return callback(args);
    if(typeof(params)!='undefined') findFiles(params.pattern).all();
    return callback();
  }
  virtualdomCompiler.prototype.optimize = function(args, callback){
    console.log(args, 'optimi');
  }
  return virtualdomCompiler;
})();
