(ns color-transit.core
  (:require [color-transit.color :as color]
            [color-transit.interval :refer [swap-interval!]]
            [color-transit.canvas :refer [ctx id->Canvas fill-style
                                          fill-rect linear-gradient-with-colors]]))

(defonce app-state (atom {:interval nil
                          :color-sets []}))

(defn draw-rect
  [canvas color]
  (-> canvas
      (ctx fill-style color)
      (ctx fill-rect 0 0 (:w canvas) (:h canvas))))

(defn draw-rect-gradient
  [canvas colors]
  (let [gradient (linear-gradient-with-colors (:ctx canvas)
                                              colors
                                              0 0 0 (:h canvas))]
    (draw-rect canvas gradient)))


(defn run-loop
  "Executes drawing every whatever time we defined."
  [canvas app-state]
  (let [new-sets (map #(color/compute-next-state % (:steps @app-state) shuffle)
                      (:color-sets @app-state))
        colors (->> new-sets (map :current-color) (map color/style))]
    (swap! app-state assoc :color-sets new-sets)
    (draw-rect-gradient canvas colors)))

(defn run-app!
  [colors fps]
  (swap! app-state
         merge {:steps 200
                :color-sets (color/->sets colors 3 :shuffle)})
  (swap-interval! app-state
                  #(run-loop (id->Canvas "myCanvas") app-state)
                  fps))

(enable-console-print!)

(run-app!
  [[0 10 0], [200 155 255], [40 40 40], [255 0 0], [0 255 255], [100 233 67]]
  (/ 1000 60))
