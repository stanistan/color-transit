(ns color-transit.canvas)

(defrecord Canvas
  [el ctx w h])

(defn el->Canvas
  [el]
  (->Canvas el (.getContext el "2d") (.-clientWidth el) (.-clientHeight el)))

(defn id->Canvas
  [id]
  (el->Canvas (.getElementById js/document id)))

(defn query->Canvases
  [query]
  (let [node-list (.querySelectorAll js/document query)]
    (map el->Canvas (array-seq node-list 0))))

(defn ctx
  "Apply f to the context of the canvas, return the canvas.
   This is useful for chaining ctx methods.
   (-> canvas
       (ctx fill-style ...)
       (ctx fill-rect ...))"
  [canvas f & args]
  (apply f (:ctx canvas) args)
  canvas)


;;
;; ctx methods
;;

(defn fill-style
  [ctx style]
  (set! (.-fillStyle ctx) style)
  ctx)

(defn fill-rect
  [ctx x0 y0 x1 y1]
  (.fillRect ctx x0 y0 x1 y1)
  ctx)

;;
;; gradient methods
;;

(defn create-linear-gradient
  [ctx x0 y0 x1 y1]
  (.createLinearGradient ctx x0 y0 x1 y1))

(defn gradient-add-color-stop
  [gradient stop color]
  (.addColorStop gradient stop color)
  gradient)

(defn gradient-add-color-stops
  "Each stop is a tuple: [stop color]"
  [gradient stops]
  (reduce
    #(gradient-add-color-stop %1 (first %2) (second %2))
    gradient
    stops))

(defn color-stops-for-colors
  "Create a list of color stops that are evently
   distributed for the colors given."
  [colors]
  (let [stop-percent (/ 1.0 (dec (count colors)))]
    (map-indexed (fn [idx color] [(* stop-percent idx) color])
                 colors)))

(defn gradient-add-colors
  [gradient colors]
  (gradient-add-color-stops
    gradient
    (color-stops-for-colors colors)))

(defn linear-gradient-with-colors
  [ctx colors x0 y0 x1 y1]
  (let [gradient (create-linear-gradient ctx x0 y0 x1 y1)]
    (gradient-add-colors gradient colors)))

;;
;; More generic methods
;;

(defn draw-rect
  [canvas style & [{:keys [x y] as opts}]]
  (-> canvas
      (ctx fill-style style)
      (ctx fill-rect 0 0 (or x (:w canvas)) (or y (:h canvas)))))

(defn draw-gradient
  [canvas colors]
  (draw-rect canvas
             (linear-gradient-with-colors (:ctx canvas) colors
                                          0 0 0 (:h canvas))))
