(ns color-transit.core
  (:require [color-transit.canvas :refer [ctx
                                          query->Canvases
                                          draw-gradient
                                          full-screen!]]
            [color-transit.canvas-set :refer [colors->CanvasSet]]
            [color-transit.color :as color]
            [color-transit.interval :refer [swap-interval!]]))

(defonce app-state (atom {:interval nil
                          :canvas-sets []}))

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
         (draw-gradient canvas))))

(defn run-loop!
  "Executes drawing every whatever time we defined."
  []
  (.requestAnimationFrame
    js/window
    ;; draw when we can
    (fn []
      (let [{:keys [canvas-sets steps]} @app-state]
        (->> (partial update-canvas-sets steps)
             (swap! app-state update :canvas-sets)
             :canvas-sets
             draw-gradients!)))))

(defn resize-canvas-sets!
  [canvas-sets]
  (map #(update % :canvas full-screen!) canvas-sets))

(defn resize-listener
  []
  (swap! app-state update :canvas-sets resize-canvas-sets!))

(defn start-app!
  [{:keys [canvas-sets fps steps]}]
  (.removeEventListener js/window "resize" resize-listener)
  (.addEventListener js/window "resize" resize-listener)
  (swap-interval! app-state run-loop! (/ 1000 fps)
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
     :canvas-sets (->> (query->Canvases ".myCanvas")
                       (map full-screen!)
                       (map (partial colors->CanvasSet colors 3 :shuffle)))}))

