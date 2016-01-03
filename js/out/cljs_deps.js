goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../color_transit/color.js", ['color_transit.color'], ['cljs.core']);
goog.addDependency("../color_transit/canvas_set.js", ['color_transit.canvas_set'], ['cljs.core', 'color_transit.color']);
goog.addDependency("../color_transit/interval.js", ['color_transit.interval'], ['cljs.core']);
goog.addDependency("../color_transit/canvas.js", ['color_transit.canvas'], ['cljs.core']);
goog.addDependency("../color_transit/core.js", ['color_transit.core'], ['cljs.core', 'color_transit.color', 'color_transit.canvas_set', 'color_transit.interval', 'color_transit.canvas']);
