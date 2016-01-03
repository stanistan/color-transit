// Compiled by ClojureScript 1.7.170 {}
goog.provide('color_transit.core');
goog.require('cljs.core');
goog.require('color_transit.canvas');
goog.require('color_transit.canvas_set');
goog.require('color_transit.color');
goog.require('color_transit.interval');
if(typeof color_transit.core.app_state !== 'undefined'){
} else {
color_transit.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interval","interval",1708495417),null,new cljs.core.Keyword(null,"canvas-sets","canvas-sets",1169906685),cljs.core.PersistentVector.EMPTY], null));
}
color_transit.core.update_color_sets = (function color_transit$core$update_color_sets(steps,color_sets){
return cljs.core.map.call(null,(function (p1__6213_SHARP_){
return color_transit.color.compute_next_state.call(null,p1__6213_SHARP_,steps,cljs.core.shuffle);
}),color_sets);
});
color_transit.core.update_canvas_sets = (function color_transit$core$update_canvas_sets(steps,canvas_sets){
var update_color_sets = cljs.core.partial.call(null,color_transit.core.update_color_sets,steps);
return cljs.core.map.call(null,((function (update_color_sets){
return (function (p1__6214_SHARP_){
return cljs.core.update.call(null,p1__6214_SHARP_,new cljs.core.Keyword(null,"color-sets","color-sets",629008847),update_color_sets);
});})(update_color_sets))
,canvas_sets);
});
color_transit.core.draw_gradients_BANG_ = (function color_transit$core$draw_gradients_BANG_(canvas_sets){
var seq__6223 = cljs.core.seq.call(null,canvas_sets);
var chunk__6224 = null;
var count__6225 = (0);
var i__6226 = (0);
while(true){
if((i__6226 < count__6225)){
var map__6227 = cljs.core._nth.call(null,chunk__6224,i__6226);
var map__6227__$1 = ((((!((map__6227 == null)))?((((map__6227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6227):map__6227);
var canvas = cljs.core.get.call(null,map__6227__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var color_sets = cljs.core.get.call(null,map__6227__$1,new cljs.core.Keyword(null,"color-sets","color-sets",629008847));
color_transit.canvas.draw_gradient.call(null,canvas,cljs.core.map.call(null,color_transit.color.style,cljs.core.map.call(null,new cljs.core.Keyword(null,"current-color","current-color",1731984119),color_sets)));

var G__6231 = seq__6223;
var G__6232 = chunk__6224;
var G__6233 = count__6225;
var G__6234 = (i__6226 + (1));
seq__6223 = G__6231;
chunk__6224 = G__6232;
count__6225 = G__6233;
i__6226 = G__6234;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6223);
if(temp__4425__auto__){
var seq__6223__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6223__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__6223__$1);
var G__6235 = cljs.core.chunk_rest.call(null,seq__6223__$1);
var G__6236 = c__5474__auto__;
var G__6237 = cljs.core.count.call(null,c__5474__auto__);
var G__6238 = (0);
seq__6223 = G__6235;
chunk__6224 = G__6236;
count__6225 = G__6237;
i__6226 = G__6238;
continue;
} else {
var map__6229 = cljs.core.first.call(null,seq__6223__$1);
var map__6229__$1 = ((((!((map__6229 == null)))?((((map__6229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6229):map__6229);
var canvas = cljs.core.get.call(null,map__6229__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var color_sets = cljs.core.get.call(null,map__6229__$1,new cljs.core.Keyword(null,"color-sets","color-sets",629008847));
color_transit.canvas.draw_gradient.call(null,canvas,cljs.core.map.call(null,color_transit.color.style,cljs.core.map.call(null,new cljs.core.Keyword(null,"current-color","current-color",1731984119),color_sets)));

var G__6239 = cljs.core.next.call(null,seq__6223__$1);
var G__6240 = null;
var G__6241 = (0);
var G__6242 = (0);
seq__6223 = G__6239;
chunk__6224 = G__6240;
count__6225 = G__6241;
i__6226 = G__6242;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Executes drawing every whatever time we defined.
 */
color_transit.core.run_loop_BANG_ = (function color_transit$core$run_loop_BANG_(){
return window.requestAnimationFrame((function (){
var map__6245 = cljs.core.deref.call(null,color_transit.core.app_state);
var map__6245__$1 = ((((!((map__6245 == null)))?((((map__6245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6245):map__6245);
var canvas_sets = cljs.core.get.call(null,map__6245__$1,new cljs.core.Keyword(null,"canvas-sets","canvas-sets",1169906685));
var steps = cljs.core.get.call(null,map__6245__$1,new cljs.core.Keyword(null,"steps","steps",-128433302));
return color_transit.core.draw_gradients_BANG_.call(null,new cljs.core.Keyword(null,"canvas-sets","canvas-sets",1169906685).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,color_transit.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"canvas-sets","canvas-sets",1169906685),cljs.core.partial.call(null,color_transit.core.update_canvas_sets,steps))));
}));
});
color_transit.core.start_app_BANG_ = (function color_transit$core$start_app_BANG_(p__6247){
var map__6250 = p__6247;
var map__6250__$1 = ((((!((map__6250 == null)))?((((map__6250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6250):map__6250);
var canvas_sets = cljs.core.get.call(null,map__6250__$1,new cljs.core.Keyword(null,"canvas-sets","canvas-sets",1169906685));
var fps = cljs.core.get.call(null,map__6250__$1,new cljs.core.Keyword(null,"fps","fps",683533296));
var steps = cljs.core.get.call(null,map__6250__$1,new cljs.core.Keyword(null,"steps","steps",-128433302));
return color_transit.interval.swap_interval_BANG_.call(null,color_transit.core.app_state,color_transit.core.run_loop_BANG_,((1000) / fps),new cljs.core.Keyword(null,"steps","steps",-128433302),steps,new cljs.core.Keyword(null,"canvas-sets","canvas-sets",1169906685),canvas_sets);
});
color_transit.core.canvas_full_screen = (function color_transit$core$canvas_full_screen(canvas){
var w = window.innerWidth;
var h = window.innerHeight;
new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(canvas).width = w;

new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(canvas).height = h;

return cljs.core.assoc.call(null,canvas,new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h);
});
var colors_6252 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(155),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40),(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(233),(67)], null)], null);
color_transit.core.start_app_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fps","fps",683533296),(60),new cljs.core.Keyword(null,"steps","steps",-128433302),(300),new cljs.core.Keyword(null,"canvas-sets","canvas-sets",1169906685),cljs.core.map.call(null,cljs.core.partial.call(null,color_transit.canvas_set.colors__GT_CanvasSet,colors_6252,(3),new cljs.core.Keyword(null,"shuffle","shuffle",1261412160)),cljs.core.map.call(null,color_transit.core.canvas_full_screen,color_transit.canvas.query__GT_Canvases.call(null,".myCanvas")))], null));

//# sourceMappingURL=core.js.map