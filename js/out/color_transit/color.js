// Compiled by ClojureScript 1.7.170 {}
goog.provide('color_transit.color');
goog.require('cljs.core');
color_transit.color.style = (function color_transit$color$style(p__5781){
var vec__5783 = p__5781;
var r = cljs.core.nth.call(null,vec__5783,(0),null);
var g = cljs.core.nth.call(null,vec__5783,(1),null);
var b = cljs.core.nth.call(null,vec__5783,(2),null);
return [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
});
color_transit.color.delta = (function color_transit$color$delta(p__5784,p__5785,steps){
var vec__5788 = p__5784;
var r1 = cljs.core.nth.call(null,vec__5788,(0),null);
var g1 = cljs.core.nth.call(null,vec__5788,(1),null);
var b1 = cljs.core.nth.call(null,vec__5788,(2),null);
var vec__5789 = p__5785;
var r2 = cljs.core.nth.call(null,vec__5789,(0),null);
var g2 = cljs.core.nth.call(null,vec__5789,(1),null);
var b2 = cljs.core.nth.call(null,vec__5789,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((r2 - r1) / steps),((g2 - g1) / steps),((b2 - b1) / steps)], null);
});
color_transit.color._PLUS_delta = (function color_transit$color$_PLUS_delta(p__5790,p__5791,scalar){
var vec__5794 = p__5790;
var r = cljs.core.nth.call(null,vec__5794,(0),null);
var g = cljs.core.nth.call(null,vec__5794,(1),null);
var b = cljs.core.nth.call(null,vec__5794,(2),null);
var vec__5795 = p__5791;
var r_PLUS_ = cljs.core.nth.call(null,vec__5795,(0),null);
var g_PLUS_ = cljs.core.nth.call(null,vec__5795,(1),null);
var b_PLUS_ = cljs.core.nth.call(null,vec__5795,(2),null);
return cljs.core.map.call(null,Math.floor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r + (scalar * r_PLUS_)),(g + (scalar * g_PLUS_)),(b + (scalar * b_PLUS_))], null));
});
/**
 * Given a color and the list of colors to choose from, find the
 * next color.
 */
color_transit.color.find_next = (function color_transit$color$find_next(current,color_list){
var reducer = (function (found_enum,c){
var G__5797 = found_enum;
if(cljs.core._EQ_.call(null,null,G__5797)){
if(cljs.core._EQ_.call(null,current,c)){
return true;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,true,G__5797)){
return c;
} else {
return found_enum;

}
}
});
var v = cljs.core.reduce.call(null,reducer,null,color_list);
if(cljs.core.vector_QMARK_.call(null,v)){
return v;
} else {
return null;
}
});
color_transit.color.create_queue = (function color_transit$color$create_queue(from_color,to_color,steps){
var d = color_transit.color.delta.call(null,from_color,to_color,steps);
return cljs.core.conj.call(null,cljs.core.map.call(null,((function (d){
return (function (p1__5798_SHARP_){
return color_transit.color._PLUS_delta.call(null,from_color,d,p1__5798_SHARP_);
});})(d))
,cljs.core.range.call(null,(0),(steps + (1)))));
});
color_transit.color.with_color_and_queue = (function color_transit$color$with_color_and_queue(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5805 = arguments.length;
var i__5730__auto___5806 = (0);
while(true){
if((i__5730__auto___5806 < len__5729__auto___5805)){
args__5736__auto__.push((arguments[i__5730__auto___5806]));

var G__5807 = (i__5730__auto___5806 + (1));
i__5730__auto___5806 = G__5807;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return color_transit.color.with_color_and_queue.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

color_transit.color.with_color_and_queue.cljs$core$IFn$_invoke$arity$variadic = (function (color_map,c,q,p__5803){
var vec__5804 = p__5803;
var colors = cljs.core.nth.call(null,vec__5804,(0),null);
return cljs.core.assoc.call(null,color_map,new cljs.core.Keyword(null,"color-queue","color-queue",-1296845579),q,new cljs.core.Keyword(null,"current-color","current-color",1731984119),c,new cljs.core.Keyword(null,"colors","colors",1157174732),(function (){var or__4671__auto__ = colors;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(color_map);
}
})());
});

color_transit.color.with_color_and_queue.cljs$lang$maxFixedArity = (3);

color_transit.color.with_color_and_queue.cljs$lang$applyTo = (function (seq5799){
var G__5800 = cljs.core.first.call(null,seq5799);
var seq5799__$1 = cljs.core.next.call(null,seq5799);
var G__5801 = cljs.core.first.call(null,seq5799__$1);
var seq5799__$2 = cljs.core.next.call(null,seq5799__$1);
var G__5802 = cljs.core.first.call(null,seq5799__$2);
var seq5799__$3 = cljs.core.next.call(null,seq5799__$2);
return color_transit.color.with_color_and_queue.cljs$core$IFn$_invoke$arity$variadic(G__5800,G__5801,G__5802,seq5799__$3);
});
/**
 * Given color settings, return the next  value.
 */
color_transit.color.compute_next_state = (function color_transit$color$compute_next_state(p__5808,steps,permute_colors_fn){
var map__5811 = p__5808;
var map__5811__$1 = ((((!((map__5811 == null)))?((((map__5811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5811):map__5811);
var color_map = map__5811__$1;
var color_queue = cljs.core.get.call(null,map__5811__$1,new cljs.core.Keyword(null,"color-queue","color-queue",-1296845579));
var current_color = cljs.core.get.call(null,map__5811__$1,new cljs.core.Keyword(null,"current-color","current-color",1731984119));
var colors = cljs.core.get.call(null,map__5811__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
if(!(cljs.core.empty_QMARK_.call(null,color_queue))){
return color_transit.color.with_color_and_queue.call(null,color_map,cljs.core.first.call(null,color_queue),cljs.core.rest.call(null,color_queue));
} else {
var next_color = color_transit.color.find_next.call(null,current_color,colors);
var colors__$1 = (((next_color == null))?permute_colors_fn.call(null,colors):colors);
var next_color__$1 = (((next_color == null))?cljs.core.first.call(null,colors__$1):next_color);
var color_queue__$1 = color_transit.color.create_queue.call(null,current_color,next_color__$1,steps);
return color_transit.color.with_color_and_queue.call(null,color_map,cljs.core.first.call(null,color_queue__$1),cljs.core.rest.call(null,color_queue__$1),colors__$1);
}
});
color_transit.color.as_color_set = (function color_transit$color$as_color_set(colors){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"color-queue","color-queue",-1296845579),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.first.call(null,colors)], null);
});
if(typeof color_transit.color.partition_colors_into !== 'undefined'){
} else {
color_transit.color.partition_colors_into = (function (){var method_table__5584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5585__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5588__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"color-transit.color","partition-colors-into"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (_,___$1,k){
return k;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
cljs.core._add_method.call(null,color_transit.color.partition_colors_into,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),(function (colors,num_sets,_){
return cljs.core.map.call(null,(function (){
return cljs.core.shuffle.call(null,colors);
}),cljs.core.range.call(null,num_sets));
}));
cljs.core._add_method.call(null,color_transit.color.partition_colors_into,new cljs.core.Keyword(null,"partition","partition",1174740751),(function (colors,num_sets,_){
var ncolors = cljs.core.count.call(null,colors);
if((cljs.core.mod.call(null,ncolors,num_sets) === (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("colors: "),cljs.core.str(colors),cljs.core.str(" should be divisible by num-sets: "),cljs.core.str(num_sets)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"ncolors","ncolors",-917004433,null),new cljs.core.Symbol(null,"num-sets","num-sets",-684998573,null)))))].join('')));
}

return cljs.core.partition.call(null,ncolors,colors);
}));
color_transit.color.__GT_sets = (function color_transit$color$__GT_sets(colors,num_sets,partition_fn){
return cljs.core.map.call(null,color_transit.color.as_color_set,color_transit.color.partition_colors_into.call(null,colors,num_sets,partition_fn));
});

//# sourceMappingURL=color.js.map