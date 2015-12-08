var virtualdomCompiler,
  watcher = require('./watcher'),
  parseFile = require('./parseFile'),
  virtualCopy = require('quickly-copy-file'),
  VNode = require('virtual-dom/vnode/vnode'),
  VText = require('virtual-dom/vnode/vtext'),
  colors = require('colors');
module.exports = virtualdomCompiler =(function(){
  var params;
  var convertHTML = require('html-to-vdom')({
    VNode: VNode,
    VText: VText
  });
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun','Jul','Aug', 'Sep', 'Oct', 'Nov','Dec'];
  function virtualdomCompiler(config){
    params = config.virtualdom;
    if(typeof(params)!='undefined') init();
  }

  virtualdomCompiler.prototype.brunchPlugin = true;
  virtualdomCompiler.prototype.type = 'javascript';
  virtualdomCompiler.prototype.extension = 'js';
  //virtualdomCompiler.prototype.defaultEnv = '*';
  virtualdomCompiler.prototype.pattern = /\.js$/;


  function init ()
  {
    watcher(params.path || 'app').start(params.pattern, function(event, path){

      parseFile(path).toDom(function(content){
        var js = convertHTML(content);
        parseFile(path).toFile(js, function(file){
          console.log(getDate(),'-','info'.green,' copied file'.black, file);
        });
      });
    });
  }
  function getDate(){
    var date = new Date();
    var d = (date.getDate()<=9) ?'0'+date.getDate():date.getDate();
    var month = months[parseInt(date.getMonth())];
    var h = (date.getHours()<=9) ?'0'+date.getHours():date.getHours();
    var m = (date.getMinutes()<=9) ?'0'+date.getMinutes():date.getMinutes();
    var s = (date.getSeconds()<=9) ?'0'+date.getSeconds():date.getSeconds();
    var hhmmss = h+':'+m+':'+s;
    return d+' '+month+' '+hhmmss;
  }

  return virtualdomCompiler;
})();
