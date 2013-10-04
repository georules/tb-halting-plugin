Tributary.plugin("halting", tributaryHaltingPlugin);

function tributaryHaltingPlugin(tributary, plugin) {
  var el;
  var maxdepth = 1000;

  plugin.activate = function()  {
    //console.log("hi from halting plugin");
    el = document.getElementById(plugin.elId);
    console.log("halting: ");
    cm = tributary.getCodeEditor("inlet.js");
    cm.on('beforeChange',function(cm,change) {
      text = cm.lineInfo(change.to.line).text
      hit = matchLoops(text)
      if (hit) {
        console.log("DANGER DANGER " + hit.index);
      }
    });
  }
  plugin.deactivate = function()  {
    el = document.getElementById(plugin.elId);
    el.innerHTML = "";
  }

  var matchLoops = function(line) {
    var re = /(for|while)/g
    var match = re.exec(line);
    if (match) {
      return {
        index : match.index
      }
    }
    else
      return
  }

  return plugin;
}
