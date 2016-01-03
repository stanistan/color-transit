// Compiled by ClojureScript 1.7.170 {}
goog.provide('color_transit.canvas');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
color_transit.canvas.Canvas = (function (el,ctx,w,h,__meta,__extmap,__hash){
this.el = el;
this.ctx = ctx;
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
color_transit.canvas.Canvas.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5285__auto__,k__5286__auto__){
var self__ = this;
var this__5285__auto____$1 = this;
return cljs.core._lookup.call(null,this__5285__auto____$1,k__5286__auto__,null);
});

color_transit.canvas.Canvas.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5287__auto__,k5935,else__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
var G__5937 = (((k5935 instanceof cljs.core.Keyword))?k5935.fqn:null);
switch (G__5937) {
case "el":
return self__.el;

break;
case "ctx":
return self__.ctx;

break;
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5935,else__5288__auto__);

}
});

color_transit.canvas.Canvas.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5299__auto__,writer__5300__auto__,opts__5301__auto__){
var self__ = this;
var this__5299__auto____$1 = this;
var pr_pair__5302__auto__ = ((function (this__5299__auto____$1){
return (function (keyval__5303__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5300__auto__,cljs.core.pr_writer,""," ","",opts__5301__auto__,keyval__5303__auto__);
});})(this__5299__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5300__auto__,pr_pair__5302__auto__,"#color-transit.canvas.Canvas{",", ","}",opts__5301__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctx","ctx",-493610118),self__.ctx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

color_transit.canvas.Canvas.prototype.cljs$core$IIterable$ = true;

color_transit.canvas.Canvas.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5934){
var self__ = this;
var G__5934__$1 = this;
return (new cljs.core.RecordIter((0),G__5934__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

color_transit.canvas.Canvas.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5283__auto__){
var self__ = this;
var this__5283__auto____$1 = this;
return self__.__meta;
});

color_transit.canvas.Canvas.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5279__auto__){
var self__ = this;
var this__5279__auto____$1 = this;
return (new color_transit.canvas.Canvas(self__.el,self__.ctx,self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

color_transit.canvas.Canvas.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5289__auto__){
var self__ = this;
var this__5289__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

color_transit.canvas.Canvas.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
var h__5106__auto__ = self__.__hash;
if(!((h__5106__auto__ == null))){
return h__5106__auto__;
} else {
var h__5106__auto____$1 = cljs.core.hash_imap.call(null,this__5280__auto____$1);
self__.__hash = h__5106__auto____$1;

return h__5106__auto____$1;
}
});

color_transit.canvas.Canvas.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5281__auto__,other__5282__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4659__auto__ = other__5282__auto__;
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = (this__5281__auto____$1.constructor === other__5282__auto__.constructor);
if(and__4659__auto____$1){
return cljs.core.equiv_map.call(null,this__5281__auto____$1,other__5282__auto__);
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
return true;
} else {
return false;
}
});

color_transit.canvas.Canvas.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5294__auto__,k__5295__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"ctx","ctx",-493610118),null], null), null),k__5295__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5294__auto____$1),self__.__meta),k__5295__auto__);
} else {
return (new color_transit.canvas.Canvas(self__.el,self__.ctx,self__.w,self__.h,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5295__auto__)),null));
}
});

color_transit.canvas.Canvas.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5292__auto__,k__5293__auto__,G__5934){
var self__ = this;
var this__5292__auto____$1 = this;
var pred__5938 = cljs.core.keyword_identical_QMARK_;
var expr__5939 = k__5293__auto__;
if(cljs.core.truth_(pred__5938.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__5939))){
return (new color_transit.canvas.Canvas(G__5934,self__.ctx,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5938.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118),expr__5939))){
return (new color_transit.canvas.Canvas(self__.el,G__5934,self__.w,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5938.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__5939))){
return (new color_transit.canvas.Canvas(self__.el,self__.ctx,G__5934,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5938.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__5939))){
return (new color_transit.canvas.Canvas(self__.el,self__.ctx,self__.w,G__5934,self__.__meta,self__.__extmap,null));
} else {
return (new color_transit.canvas.Canvas(self__.el,self__.ctx,self__.w,self__.h,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5293__auto__,G__5934),null));
}
}
}
}
});

color_transit.canvas.Canvas.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctx","ctx",-493610118),self__.ctx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

color_transit.canvas.Canvas.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5284__auto__,G__5934){
var self__ = this;
var this__5284__auto____$1 = this;
return (new color_transit.canvas.Canvas(self__.el,self__.ctx,self__.w,self__.h,G__5934,self__.__extmap,self__.__hash));
});

color_transit.canvas.Canvas.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5290__auto__,entry__5291__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5291__auto__)){
return cljs.core._assoc.call(null,this__5290__auto____$1,cljs.core._nth.call(null,entry__5291__auto__,(0)),cljs.core._nth.call(null,entry__5291__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5290__auto____$1,entry__5291__auto__);
}
});

color_transit.canvas.Canvas.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

color_transit.canvas.Canvas.cljs$lang$type = true;

color_transit.canvas.Canvas.cljs$lang$ctorPrSeq = (function (this__5319__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"color-transit.canvas/Canvas");
});

color_transit.canvas.Canvas.cljs$lang$ctorPrWriter = (function (this__5319__auto__,writer__5320__auto__){
return cljs.core._write.call(null,writer__5320__auto__,"color-transit.canvas/Canvas");
});

color_transit.canvas.__GT_Canvas = (function color_transit$canvas$__GT_Canvas(el,ctx,w,h){
return (new color_transit.canvas.Canvas(el,ctx,w,h,null,null,null));
});

color_transit.canvas.map__GT_Canvas = (function color_transit$canvas$map__GT_Canvas(G__5936){
return (new color_transit.canvas.Canvas(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__5936),new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(G__5936),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__5936),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__5936),null,cljs.core.dissoc.call(null,G__5936,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)),null));
});

color_transit.canvas.el__GT_Canvas = (function color_transit$canvas$el__GT_Canvas(el){
return color_transit.canvas.__GT_Canvas.call(null,el,el.getContext("2d"),el.offsetWidth,el.offsetHeight);
});
color_transit.canvas.id__GT_Canvas = (function color_transit$canvas$id__GT_Canvas(id){
return color_transit.canvas.el__GT_Canvas.call(null,document.getElementById(id));
});
color_transit.canvas.query__GT_Canvases = (function color_transit$canvas$query__GT_Canvases(query){
var node_list = document.querySelectorAll(query);
return cljs.core.map.call(null,color_transit.canvas.el__GT_Canvas,cljs.core.array_seq.call(null,node_list,(0)));
});
/**
 * Apply f to the context of the canvas, return the canvas.
 * This is useful for chaining ctx methods.
 * (-> canvas
 *     (ctx fill-style ...)
 *     (ctx fill-rect ...))
 */
color_transit.canvas.ctx = (function color_transit$canvas$ctx(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5945 = arguments.length;
var i__5730__auto___5946 = (0);
while(true){
if((i__5730__auto___5946 < len__5729__auto___5945)){
args__5736__auto__.push((arguments[i__5730__auto___5946]));

var G__5947 = (i__5730__auto___5946 + (1));
i__5730__auto___5946 = G__5947;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return color_transit.canvas.ctx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

color_transit.canvas.ctx.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,f,args){
cljs.core.apply.call(null,f,new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(canvas),args);

return canvas;
});

color_transit.canvas.ctx.cljs$lang$maxFixedArity = (2);

color_transit.canvas.ctx.cljs$lang$applyTo = (function (seq5942){
var G__5943 = cljs.core.first.call(null,seq5942);
var seq5942__$1 = cljs.core.next.call(null,seq5942);
var G__5944 = cljs.core.first.call(null,seq5942__$1);
var seq5942__$2 = cljs.core.next.call(null,seq5942__$1);
return color_transit.canvas.ctx.cljs$core$IFn$_invoke$arity$variadic(G__5943,G__5944,seq5942__$2);
});
color_transit.canvas.fill_style = (function color_transit$canvas$fill_style(ctx,style){
ctx.fillStyle = style;

return ctx;
});
color_transit.canvas.fill_rect = (function color_transit$canvas$fill_rect(ctx,x0,y0,x1,y1){
ctx.fillRect(x0,y0,x1,y1);

return ctx;
});
color_transit.canvas.create_linear_gradient = (function color_transit$canvas$create_linear_gradient(ctx,x0,y0,x1,y1){
return ctx.createLinearGradient(x0,y0,x1,y1);
});
color_transit.canvas.gradient_add_color_stop = (function color_transit$canvas$gradient_add_color_stop(gradient,stop,color){
gradient.addColorStop(stop,color);

return gradient;
});
/**
 * Each stop is a tuple: [stop color]
 */
color_transit.canvas.gradient_add_color_stops = (function color_transit$canvas$gradient_add_color_stops(gradient,stops){
return cljs.core.reduce.call(null,(function (p1__5948_SHARP_,p2__5949_SHARP_){
return color_transit.canvas.gradient_add_color_stop.call(null,p1__5948_SHARP_,cljs.core.first.call(null,p2__5949_SHARP_),cljs.core.second.call(null,p2__5949_SHARP_));
}),gradient,stops);
});
/**
 * Create a list of color stops that are evently
 * distributed for the colors given.
 */
color_transit.canvas.color_stops_for_colors = (function color_transit$canvas$color_stops_for_colors(colors){
var stop_percent = (1.0 / (cljs.core.count.call(null,colors) - (1)));
return cljs.core.map_indexed.call(null,((function (stop_percent){
return (function (idx,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(stop_percent * idx),color], null);
});})(stop_percent))
,colors);
});
color_transit.canvas.gradient_add_colors = (function color_transit$canvas$gradient_add_colors(gradient,colors){
return color_transit.canvas.gradient_add_color_stops.call(null,gradient,color_transit.canvas.color_stops_for_colors.call(null,colors));
});
color_transit.canvas.linear_gradient_with_colors = (function color_transit$canvas$linear_gradient_with_colors(ctx,colors,x0,y0,x1,y1){
var gradient = color_transit.canvas.create_linear_gradient.call(null,ctx,x0,y0,x1,y1);
return color_transit.canvas.gradient_add_colors.call(null,gradient,colors);
});
color_transit.canvas.draw_rect = (function color_transit$canvas$draw_rect(var_args){
var args__5736__auto__ = [];
var len__5729__auto___5957 = arguments.length;
var i__5730__auto___5958 = (0);
while(true){
if((i__5730__auto___5958 < len__5729__auto___5957)){
args__5736__auto__.push((arguments[i__5730__auto___5958]));

var G__5959 = (i__5730__auto___5958 + (1));
i__5730__auto___5958 = G__5959;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return color_transit.canvas.draw_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

color_transit.canvas.draw_rect.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,style,p__5953){
var vec__5954 = p__5953;
var map__5955 = cljs.core.nth.call(null,vec__5954,(0),null);
var map__5955__$1 = ((((!((map__5955 == null)))?((((map__5955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5955):map__5955);
var opts = map__5955__$1;
var x = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return color_transit.canvas.ctx.call(null,color_transit.canvas.ctx.call(null,canvas,color_transit.canvas.fill_style,style),color_transit.canvas.fill_rect,(0),(0),(function (){var or__4671__auto__ = x;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(canvas);
}
})(),(function (){var or__4671__auto__ = y;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(canvas);
}
})());
});

color_transit.canvas.draw_rect.cljs$lang$maxFixedArity = (2);

color_transit.canvas.draw_rect.cljs$lang$applyTo = (function (seq5950){
var G__5951 = cljs.core.first.call(null,seq5950);
var seq5950__$1 = cljs.core.next.call(null,seq5950);
var G__5952 = cljs.core.first.call(null,seq5950__$1);
var seq5950__$2 = cljs.core.next.call(null,seq5950__$1);
return color_transit.canvas.draw_rect.cljs$core$IFn$_invoke$arity$variadic(G__5951,G__5952,seq5950__$2);
});
color_transit.canvas.draw_gradient = (function color_transit$canvas$draw_gradient(canvas,colors){
return color_transit.canvas.draw_rect.call(null,canvas,color_transit.canvas.linear_gradient_with_colors.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(canvas),colors,(0),(0),(0),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(canvas)));
});

//# sourceMappingURL=canvas.js.map