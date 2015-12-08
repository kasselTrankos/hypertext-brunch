var virtualdomCompiler,
  watcher = require('./watcher'),
  parseFile = require('./parseFile'),
  findFiles = require('./findFiles'),
  VNode = require('virtual-dom/vnode/vnode'),
  VText = require('virtual-dom/vnode/vtext');
module.exports = virtualdomCompiler =(function(){
  var params;
  var convertHTML = require('html-to-vdom')({
    VNode: VNode,
    VText: VText
  });
  function virtualdomCompiler(config){
    params = config.virtualdom;
  }

  virtualdomCompiler.prototype.brunchPlugin = true;
  virtualdomCompiler.prototype.type = 'javascript';
  virtualdomCompiler.prototype.extension = 'js';
  //virtualdomCompiler.prototype.defaultEnv = '*';
  virtualdomCompiler.prototype.pattern = /\.js$/;


  virtualdomCompiler.prototype.compile = function (args, callback) {
    //
    if(typeof(params)!='undefined') {
      watcher('app').start(params.pattern, function(event, path){
        parseFile(path).toDom(function(content){
          console.log('contenido of file is : ', content);
          var domTpl = convertHTML(content);
          console.log('DOM: ', domTpl);
        });
        console.log('mi files con callback easy!!!',event, path);
      });
    }
    return callback(null, args);
  }

  return virtualdomCompiler;
})();
