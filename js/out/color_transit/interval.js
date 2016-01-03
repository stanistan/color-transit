// Compiled by ClojureScript 1.7.170 {}
goog.provide('color_transit.interval');
goog.require('cljs.core');
color_transit.interval.set_interval = (function color_transit$interval$set_interval(f,timeout){
return window.setInterval(f,timeout);
});
color_transit.interval.clear_interval = (function color_transit$interval$clear_interval(interval){
if(cljs.core.truth_(interval)){
return window.clearInterval(interval);
} else {
return null;
}
});
color_transit.interval.swap_interval_BANG_ = (function color_transit$interval$swap_interval_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5829 = arguments.length;
var i__5730__auto___5830 = (0);
while(true){
if((i__5730__auto___5830 < len__5729__auto___5829)){
args__5736__auto__.push((arguments[i__5730__auto___5830]));

var G__5831 = (i__5730__auto___5830 + (1));
i__5730__auto___5830 = G__5831;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return color_transit.interval.swap_interval_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

color_transit.interval.swap_interval_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,timeout,stuff){
color_transit.interval.clear_interval.call(null,new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.hash_map,stuff),new cljs.core.Keyword(null,"interval","interval",1708495417),color_transit.interval.set_interval.call(null,f,timeout)));
});

color_transit.interval.swap_interval_BANG_.cljs$lang$maxFixedArity = (3);

color_transit.interval.swap_interval_BANG_.cljs$lang$applyTo = (function (seq5825){
var G__5826 = cljs.core.first.call(null,seq5825);
var seq5825__$1 = cljs.core.next.call(null,seq5825);
var G__5827 = cljs.core.first.call(null,seq5825__$1);
var seq5825__$2 = cljs.core.next.call(null,seq5825__$1);
var G__5828 = cljs.core.first.call(null,seq5825__$2);
var seq5825__$3 = cljs.core.next.call(null,seq5825__$2);
return color_transit.interval.swap_interval_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__5826,G__5827,G__5828,seq5825__$3);
});

//# sourceMappingURL=interval.js.map