(ns color-transit.core
  (:require [color-transit.color :as color]
            [color-transit.interval :refer [swap-interval!]]
            [color-transit.canvas :refer [ctx id->Canvas fill-style
                                          fill-rect]]))

(defonce app-state (atom {:interval nil 
                          :colors []
                          :current-color nil
                          :color-queue []}))

(defn draw-rect
  [canvas color]
  (-> canvas
      (ctx fill-style color)
      (ctx fill-rect 0 0 (:w canvas) (:h canvas))))

(defn run-loop
  "Executes drawing every whatever time we defined."
  [canvas app-state]
  (let [color-map (color/compute-next-state @app-state)
        color (-> color-map :current-color color/style)]
    (swap! app-state merge color-map)
    (draw-rect canvas color)))

(defn run-app!
  [colors fps]
  (swap! app-state merge {:steps 60
                          :colors colors
                          :current-color (first colors)})
  (swap-interval! app-state
                  #(run-loop (id->Canvas "myCanvas") app-state)
                  fps))

(run-app! 
  [[0 10 0], [200 155 255], [40 40 40], [255 0 0], [0 255 255]]
  (/ 1000 60))
