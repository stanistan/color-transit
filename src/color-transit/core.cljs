(ns color-transit.core
  (:require [color-transit.color :as color]
            [color-transit.interval :refer [swap-interval!]]
            [color-transit.canvas :refer [ctx query->Canvases
                                          fill-style fill-rect
                                          linear-gradient-with-colors]]))

(defonce app-state (atom {:interval nil
                          :canvas-sets []}))

(defn draw-rect
  [canvas color]
  (-> canvas
      (ctx fill-style color)
      (ctx fill-rect 0 0 (:w canvas) (:h canvas))))

(defn draw-rect-gradient
  [canvas colors]
  (let [gradient (linear-gradient-with-colors
                   (:ctx canvas)
                   colors
                   0 0 0 (:h canvas))]
    (draw-rect canvas gradient)))

(defn update-color-sets
  [steps color-sets]
  (map #(color/compute-next-state % steps shuffle)
       color-sets))

(defn update-canvas-sets
  [steps canvas-sets]
  (let [update-color-sets (partial update-color-sets steps)]
    (map #(update % :color-sets update-color-sets)
         canvas-sets)))

(defn draw-gradients!
  [canvas-sets]
  (doseq [{:keys [canvas color-sets]} canvas-sets]
    (->> color-sets
         (map :current-color)
         (map color/style)
         (draw-rect-gradient canvas))))


(defn run-loop
  "Executes drawing every whatever time we defined."
  [app-state]
  (let [{:keys [canvas-sets steps]} @app-state]
    (->> (partial update-canvas-sets steps)
         (swap! app-state update :canvas-sets)
         :canvas-sets
         draw-gradients!)))

(defn run-app!
  [colors fps]
  (let [canvases (query->Canvases ".myCanvas")
        canvas-sets (map
                      (fn [c] {:canvas c
                               :color-sets (color/->sets colors 3 :shuffle)})
                       canvases)
        state-data {:steps 100 :canvas-sets canvas-sets}]
    (swap! app-state merge state-data)
    (swap-interval! app-state #(run-loop app-state) fps)))

(enable-console-print!)

(run-app!
  [[0 10 0], [200 155 255], [40 40 40], [255 0 0], [0 255 255], [100 233 67]]
  (/ 1000 60))
