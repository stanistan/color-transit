(ns color-transit.core
  (:require [color-transit.color :as color]
            [color-transit.interval :refer [swap-interval!]]
            [color-transit.canvas :refer [ctx query->Canvases
                                          fill-style fill-rect
                                          linear-gradient-with-colors]]))

(defrecord CanvasSet
  [canvas color-sets])

(defn colors->CanvasSet
  [colors n-per-set partition-fn canvas]
  (->CanvasSet canvas
               (color/->sets colors n-per-set partition-fn)))

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


(defn run-loop!
  "Executes drawing every whatever time we defined."
  []
  (let [{:keys [canvas-sets steps]} @app-state]
    (->> (partial update-canvas-sets steps)
         (swap! app-state update :canvas-sets)
         :canvas-sets
         draw-gradients!)))

(defn start-app!
  [{:keys [canvas-sets fps steps]}]
  (swap-interval! app-state
                  run-loop!
                  (/ 1000 fps)
                  :steps steps
                  :canvas-sets canvas-sets))

(let [colors [[0 10 0]
              [200 155 255]
              [40 40 40]
              [255 0 0]
              [0 255 255]
              [100 233 67]]]
  (start-app!
    {:fps 60 :steps 300
     :canvas-sets (map (partial colors->CanvasSet colors 3 :shuffle)
                       (query->Canvases ".myCanvas"))}))

