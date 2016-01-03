// Compiled by ClojureScript 1.7.170 {}
goog.provide('color_transit.canvas_set');
goog.require('cljs.core');
goog.require('color_transit.color');

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
color_transit.canvas_set.CanvasSet = (function (canvas,color_sets,__meta,__extmap,__hash){
this.canvas = canvas;
this.color_sets = color_sets;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
color_transit.canvas_set.CanvasSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5285__auto__,k__5286__auto__){
var self__ = this;
var this__5285__auto____$1 = this;
return cljs.core._lookup.call(null,this__5285__auto____$1,k__5286__auto__,null);
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5287__auto__,k5816,else__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
var G__5818 = (((k5816 instanceof cljs.core.Keyword))?k5816.fqn:null);
switch (G__5818) {
case "canvas":
return self__.canvas;

break;
case "color-sets":
return self__.color_sets;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5816,else__5288__auto__);

}
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5299__auto__,writer__5300__auto__,opts__5301__auto__){
var self__ = this;
var this__5299__auto____$1 = this;
var pr_pair__5302__auto__ = ((function (this__5299__auto____$1){
return (function (keyval__5303__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5300__auto__,cljs.core.pr_writer,""," ","",opts__5301__auto__,keyval__5303__auto__);
});})(this__5299__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5300__auto__,pr_pair__5302__auto__,"#color-transit.canvas-set.CanvasSet{",", ","}",opts__5301__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color-sets","color-sets",629008847),self__.color_sets],null))], null),self__.__extmap));
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IIterable$ = true;

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5815){
var self__ = this;
var G__5815__$1 = this;
return (new cljs.core.RecordIter((0),G__5815__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"color-sets","color-sets",629008847)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5283__auto__){
var self__ = this;
var this__5283__auto____$1 = this;
return self__.__meta;
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5279__auto__){
var self__ = this;
var this__5279__auto____$1 = this;
return (new color_transit.canvas_set.CanvasSet(self__.canvas,self__.color_sets,self__.__meta,self__.__extmap,self__.__hash));
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5289__auto__){
var self__ = this;
var this__5289__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5280__auto__){
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

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5281__auto__,other__5282__auto__){
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

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5294__auto__,k__5295__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"color-sets","color-sets",629008847),null], null), null),k__5295__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5294__auto____$1),self__.__meta),k__5295__auto__);
} else {
return (new color_transit.canvas_set.CanvasSet(self__.canvas,self__.color_sets,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5295__auto__)),null));
}
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5292__auto__,k__5293__auto__,G__5815){
var self__ = this;
var this__5292__auto____$1 = this;
var pred__5819 = cljs.core.keyword_identical_QMARK_;
var expr__5820 = k__5293__auto__;
if(cljs.core.truth_(pred__5819.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),expr__5820))){
return (new color_transit.canvas_set.CanvasSet(G__5815,self__.color_sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__5819.call(null,new cljs.core.Keyword(null,"color-sets","color-sets",629008847),expr__5820))){
return (new color_transit.canvas_set.CanvasSet(self__.canvas,G__5815,self__.__meta,self__.__extmap,null));
} else {
return (new color_transit.canvas_set.CanvasSet(self__.canvas,self__.color_sets,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5293__auto__,G__5815),null));
}
}
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas","canvas",-1798817489),self__.canvas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color-sets","color-sets",629008847),self__.color_sets],null))], null),self__.__extmap));
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5284__auto__,G__5815){
var self__ = this;
var this__5284__auto____$1 = this;
return (new color_transit.canvas_set.CanvasSet(self__.canvas,self__.color_sets,G__5815,self__.__extmap,self__.__hash));
});

color_transit.canvas_set.CanvasSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5290__auto__,entry__5291__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5291__auto__)){
return cljs.core._assoc.call(null,this__5290__auto____$1,cljs.core._nth.call(null,entry__5291__auto__,(0)),cljs.core._nth.call(null,entry__5291__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5290__auto____$1,entry__5291__auto__);
}
});

color_transit.canvas_set.CanvasSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.Symbol(null,"color-sets","color-sets",-2025426922,null)], null);
});

color_transit.canvas_set.CanvasSet.cljs$lang$type = true;

color_transit.canvas_set.CanvasSet.cljs$lang$ctorPrSeq = (function (this__5319__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"color-transit.canvas-set/CanvasSet");
});

color_transit.canvas_set.CanvasSet.cljs$lang$ctorPrWriter = (function (this__5319__auto__,writer__5320__auto__){
return cljs.core._write.call(null,writer__5320__auto__,"color-transit.canvas-set/CanvasSet");
});

color_transit.canvas_set.__GT_CanvasSet = (function color_transit$canvas_set$__GT_CanvasSet(canvas,color_sets){
return (new color_transit.canvas_set.CanvasSet(canvas,color_sets,null,null,null));
});

color_transit.canvas_set.map__GT_CanvasSet = (function color_transit$canvas_set$map__GT_CanvasSet(G__5817){
return (new color_transit.canvas_set.CanvasSet(new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(G__5817),new cljs.core.Keyword(null,"color-sets","color-sets",629008847).cljs$core$IFn$_invoke$arity$1(G__5817),null,cljs.core.dissoc.call(null,G__5817,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"color-sets","color-sets",629008847)),null));
});

color_transit.canvas_set.colors__GT_CanvasSet = (function color_transit$canvas_set$colors__GT_CanvasSet(colors,n_per_set,partition_fn,canvas){
return color_transit.canvas_set.__GT_CanvasSet.call(null,canvas,color_transit.color.__GT_sets.call(null,colors,n_per_set,partition_fn));
});

//# sourceMappingURL=canvas_set.js.map