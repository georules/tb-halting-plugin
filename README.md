# Tributary Halting Plugin

A plugin for Tributary https://github.com/enjalot/tributary/

## Installation
+ Install a localhost Tributary https://github.com/enjalot/tributary/ 
+ Clone this plugin repository into static/plugins 
+ Include the following libraries from in sandbox/templates/inlet.handlebars  (I put them after "UI Related")

+ Put the following call in sandbox sandbox/templates/inlet.handlebars in the on "loaded" anonymous function.

```
tb.events.on("loaded", function() { 
  [...]
  tb.loadPlugin("/static/plugins/tb-halting-plugin/plugin.json", {}, 
    function(e) {console.log("callback: ",e);}
  );
  [...]
})
```

+ make in tributary root

## How to use
+ Open a tributary inlet
+ Make an infinite loop
+ Get Halted (well, not yet, but soon)

## How it works

## To-Do

## Contributing 
Send pull requests to https://github.com/georules/tb-halting-plugin
