Tributary.plugin("halting", tributaryHaltingPlugin);

function tributaryHaltingPlugin(tributary, plugin) {
  var el;
  plugin.activate = function()  {
    //console.log("hi from halting plugin");
    el = document.getElementById(plugin.elId);
  }
  plugin.deactivate = function()  {
    el = document.getElementById(plugin.elId);
    el.innerHTML = "";
  }

  return plugin;
}
